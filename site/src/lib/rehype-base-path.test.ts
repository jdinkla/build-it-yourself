import { describe, expect, it } from 'vitest';
import { rehypeBasePath } from '../../integrations/rehype-base-path';

function run(tree: any, base = '/build-it-yourself') {
  rehypeBasePath(base)()(tree);
  return tree;
}

describe('rehypeBasePath', () => {
  it('prefixes root-relative hrefs and srcs', () => {
    const tree = {
      type: 'root',
      children: [
        { type: 'element', properties: { href: '/about/' }, children: [] },
        { type: 'element', properties: { src: '/img/x.webp' }, children: [] }
      ]
    };
    run(tree);
    expect(tree.children[0].properties.href).toBe('/build-it-yourself/about/');
    expect(tree.children[1].properties.src).toBe('/build-it-yourself/img/x.webp');
  });

  it('leaves external, protocol-relative, and anchor links alone', () => {
    const tree = {
      type: 'root',
      children: [
        { type: 'element', properties: { href: 'https://example.org/' }, children: [] },
        { type: 'element', properties: { href: '//example.org/x' }, children: [] },
        { type: 'element', properties: { href: '#section' }, children: [] }
      ]
    };
    run(tree);
    expect(tree.children.map((c: any) => c.properties.href)).toEqual([
      'https://example.org/',
      '//example.org/x',
      '#section'
    ]);
  });

  it('walks nested children', () => {
    const tree = {
      type: 'root',
      children: [
        {
          type: 'element',
          properties: {},
          children: [{ type: 'element', properties: { href: '/deep' }, children: [] }]
        }
      ]
    };
    run(tree);
    expect(tree.children[0].children[0].properties.href).toBe('/build-it-yourself/deep');
  });
});

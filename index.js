/**
 * @typedef {import('micromark-util-types').Extension} Extension
 *
 * to do: {import('micromark-util-mdx-jsx').Options} Options
 * @typedef {Record<string, unknown>} Options
 */

import {Parser} from 'acorn'
// @ts-expect-error: untyped
import acornJsx from 'acorn-jsx'
import {combineExtensions} from 'micromark-util-combine-extensions'
// @ts-expect-error: next
import expression from 'micromark-extension-mdx-expression'
// @ts-expect-error: next
import jsx from 'micromark-extension-mdx-jsx'
// @ts-expect-error: next
import md from 'micromark-extension-mdx-md'
// @ts-expect-error: next
import esm from 'micromark-extension-mdxjs-esm'

/**
 * @param {Options} [options]
 * @returns {Extension}
 */
export function mdxjs(options) {
  const settings = Object.assign(
    {
      acorn: Parser.extend(acornJsx()),
      acornOptions: {ecmaVersion: 2020, sourceType: 'module'},
      addResult: true
    },
    options
  )

  // @ts-expect-error: It’s fine.
  return combineExtensions([
    esm(settings),
    expression(settings),
    jsx(settings),
    md
  ])
}

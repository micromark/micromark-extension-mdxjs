import {Parser} from 'acorn'
import acornJsx from 'acorn-jsx'
import {combineExtensions} from 'micromark-util-combine-extensions'
import expression from 'micromark-extension-mdx-expression'
import jsx from 'micromark-extension-mdx-jsx'
import md from 'micromark-extension-mdx-md'
import esm from 'micromark-extension-mdxjs-esm'

export function mdxjs(options) {
  const settings = Object.assign(
    {
      acorn: Parser.extend(acornJsx()),
      acornOptions: {ecmaVersion: 2020, sourceType: 'module'},
      addResult: true
    },
    options
  )

  return combineExtensions([
    esm(settings),
    expression(settings),
    jsx(settings),
    md
  ])
}

import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdxjs} from './index.js'

test('markdown -> html (micromark)', function () {
  assert.equal(
    micromark('<div>\n{asd}\n</div>', {extensions: [mdxjs()]}),
    '\n\n',
    'should work'
  )

  assert.equal(
    micromark('<x {...{"{": 1}} />\n{1 + /*}*/ + 2}', {extensions: [mdxjs()]}),
    '\n',
    'should be gnostic'
  )
})

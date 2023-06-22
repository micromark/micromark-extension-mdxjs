import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdxjs} from 'micromark-extension-mdxjs'

test('markdown -> html (micromark)', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      Object.keys(await import('micromark-extension-mdxjs')).sort(),
      ['mdxjs']
    )
  })

  await t.test('should work', async function () {
    assert.equal(
      micromark('<div>\n{asd}\n</div>', {extensions: [mdxjs()]}),
      '\n\n'
    )
  })

  await t.test('should be gnostic', async function () {
    assert.equal(
      micromark('<x {...{"{": 1}} />\n{1 + /*}*/ + 2}', {
        extensions: [mdxjs()]
      }),
      '\n'
    )
  })
})

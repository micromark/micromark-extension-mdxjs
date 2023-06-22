import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdxjs} from './index.js'

test('markdown -> html (micromark)', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      // To do: next major: use export map, use package name here.
      Object.keys(await import('./index.js')).sort(),
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

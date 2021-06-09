import test from 'tape'
import {micromark} from 'micromark'
import {mdxjs} from './index.js'

test('markdown -> html (micromark)', (t) => {
  t.deepEqual(
    micromark('<div>\n{asd}\n</div>', {extensions: [mdxjs()]}),
    '\n\n',
    'should work'
  )

  t.deepEqual(
    micromark('<x {...{"{": 1}} />\n{1 + /*}*/ + 2}', {extensions: [mdxjs()]}),
    '\n',
    'should be gnostic'
  )

  t.end()
})

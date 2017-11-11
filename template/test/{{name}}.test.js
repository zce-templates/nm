import test from 'ava'
import {{camel name}} from '..'

test('<test-title>', t => {
  const err = t.throws(() => {{camel name}}(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is({{camel name}}('w'), 'w@zce.me')
  t.is({{camel name}}('w', { host: 'wedn.net' }), 'w@wedn.net')
})

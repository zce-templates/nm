import test from 'ava'
import <%= _.camelCase(name) %> from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => <%= _.camelCase(name) %>(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(<%= _.camelCase(name) %>('w'), 'w@zce.me')
  t.is(<%= _.camelCase(name) %>('w', { host: 'wedn.net' }), 'w@wedn.net')
})

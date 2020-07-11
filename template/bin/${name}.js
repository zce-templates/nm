#!/usr/bin/env node

const minimist = require('minimist')
const <%= _.camelCase(name) %> = require('..')
const { name, version } = require('../package')

const argv = minimist(process.argv.slice(2))

if (argv.help || argv.h) {
  console.log(`
Usage: <%= "${name}" %> <input> [options]

Options:
  --host         Email host
  -V, --version  show version
  -h, --help     show help info
`.trim())
  process.exit()
}

if (argv.version || argv.V) {
  console.log(version)
  process.exit()
}

// TODO: Implement module cli

const { host, _: [ input ] } = argv

if (typeof input === 'undefined') {
  console.error('Missing required argument: <input>')
  process.exit(1)
}

console.log(<%= _.camelCase(name) %>(input, { host }))

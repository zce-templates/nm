#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package')
const <%= _.camelCase(name) %> = require('..')

program
  .version(pkg.version)
  .usage('<input>')
  .option('-H, --host', 'Email host')
  .on('--help', console.log)
  .parse(process.argv)
  .args.length || program.help()

const { args, host } = program
const [ input ] = args

// TODO: Implement module cli
console.log(<%= _.camelCase(name) %>(input, { host }))

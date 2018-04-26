import test from 'ava'

import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { generator } from 'zce-cli'
import { util } from 'zce-cli/lib/common'
import mockPrompt from 'mock-prompt'

const readdir = promisify(fs.readdir)

test.before(async t => {
  const cwd = path.join(__dirname, 'dist')
  await util.mkdirp(cwd)
  process.chdir(cwd)
})

test.after(async t => {
  const cwd = process.cwd()
  process.chdir(__dirname)
  await util.rimraf(cwd)
})

test.serial('minimal', async t => {
  mockPrompt({
    name: 'minimal-template',
    version: '0.1.0',
    features: []
  })

  await generator.init('../../', 'minimal-template', { force: true, save: false })

  const files = await readdir(path.join(process.cwd(), 'minimal-template'))
  t.is(files.length, 7)
})

test.serial('maximal', async t => {
  // TODO: mock prompt answers
  mockPrompt({
    name: 'maximal-template',
    version: '0.1.0',
    description: 'a maximal nm',
    author: 'zce <w@zce.me> (https://zce.me/)',
    github: 'zce',
    license: 'MIT',
    features: [ 'cli', 'doc', 'example', 'test', 'coverage' ]
  })

  await generator.init('../../', 'maximal-template', { force: true, save: false })

  const files = await readdir(path.join(process.cwd(), 'maximal-template'))
  t.is(files.length, 12)
})

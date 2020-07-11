const fs = require('fs')
const path = require('path')
const Enquirer = require('enquirer')
const { default: init } = require('zce-cli/lib/commands/init')

jest.mock('enquirer')

jest.setTimeout(20000)

beforeAll(() => {
  const cwd = path.join(__dirname, '.temp')
  fs.mkdirSync(cwd)
  process.chdir(cwd)
})

afterAll(() => {
  const cwd = process.cwd()
  process.chdir(__dirname)
  fs.rmdirSync(cwd, { recursive: true })
})

// test('minimal', async () => {
//   Enquirer.prompt = jest.fn().mockResolvedValue({
//     name: 'minimal-template',
//     version: '0.1.0',
//     description: '',
//     author: '',
//     email: '',
//     url: '',
//     github: '',
//     license: '',
//     features: []
//   })
//   await init.action({ primary: '../../', secondary: 'minimal-template', options: {} })
//   const files = await fs.promises.readdir('minimal-template')
//   expect(files.length).toBe(10)
// })

test('maximal', async () => {
  Enquirer.prompt = jest.fn().mockResolvedValue({
    name: 'maximal-template',
    version: '0.1.0',
    description: 'a maximal nm',
    author: 'zce',
    email: 'w@zce.me',
    url: 'https://zce.me',
    github: 'zce',
    license: 'MIT',
    features: ['cli', 'doc', 'example', 'test', 'coverage', 'maintain']
  })
  await init.action({ primary: '../../', secondary: 'maximal-template', options: {} })
  const files = await fs.promises.readdir('maximal-template')
  expect(files.length).toBe(16)
})

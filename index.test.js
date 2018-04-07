'use strict'

const http = require('http')

const getPort = require('get-port')

const portReady = require('.')

describe('port-ready', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30 * 1000

  let server
  let port
  beforeAll(async () => {
    port = await getPort()
    server = http.createServer((req, res) => {
      res.end()
    })
    server.listen(port)
  })

  afterAll(() => {
    server.close()
  })

  it('wait for port ready', async () => {
    expect(await portReady({ port })).toBe(port)
  })

  it('accept port number as option', async () => {
    expect(await portReady(port)).toBe(port)
  })
})

test('throw when port is not defined', () => {
  expect(() => portReady()).toThrow()
})

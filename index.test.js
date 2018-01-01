'use strict'

const http = require('http')

const getPort = require('get-port')

const portReady = require('.')

test('wait for port ready', async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30 * 1000

  const port = await getPort()
  const server = http.createServer((req, res) => {
    res.end()
  })
  server.listen(port)

  expect(await portReady({ port })).toBe(port)

  server.close()
})

test('throw when port is not defined', () => {
  expect(() => portReady()).toThrow()
})

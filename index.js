'use strict'

const assert = require('assert')

const connectPort = require('connect-port')
const pTimeout = require('p-timeout')
const pWaitFor = require('p-wait-for')

module.exports = ({ host = 'localhost', port, timeout = 300000 } = {}) => {
  assert(port, 'port is require')
  return pTimeout(
    pWaitFor(
      () =>
        connectPort({ host, port, timeout: 500 })
          .then(socket => {
            socket.destroy()
            return true
          })
          .catch(() => false),
      { interval: 100 }
    ).then(() => port),
    timeout
  )
}

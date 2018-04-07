# port-ready

Promise to wait until a port is ready to accept connection.

## Installation

```
npm install port-ready --save
```

## Usage

<!-- eslint-disable strict,node/no-missing-require -->

```js
const portReady = require('port-ready')

portReady({ port: 8000 }).then(port => {
  console.log(port)
})
```

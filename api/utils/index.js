const fastRedact = require('fast-redact')

const redact = fastRedact({
  paths: ['password'],
})

exports.applyMiddleware = (middlewareWrapper, router) => {
  for (const wrapper of middlewareWrapper) {
    wrapper(router)
  }
}

exports.logRequest = (req, res) => {
  const {method, originalUrl, body} = req
  console.log(
    `${method} ${originalUrl} ${redact(body || {})} ${res.statusCode}`,
  )
}

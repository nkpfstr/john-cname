'use strict'

const fs = require('fs-extra')
const url = require('url')

module.exports = (domain, path) => {
  // Require domain argument
  if (!domain) {
    throw new Error('You must provide a domain')
  } else {
    domain = url.parse(domain)

    if (domain.protocol) {
      // Remove protocol
      domain = domain.host
    } else if (domain.path.endsWith('/')) {
      // Remove trailing slashes
      domain = domain.path.replace(/\//g, '')
    }

    if (path) {
      if (typeof path === 'string') {
        // Generate CNAME file
        fs.outputFile(`${path}/CNAME`, domain, err => {
          throw new Error(err)
        })
      } else {
        throw new Error(`Expected path to be string, not ${typeof path}`)
      }
    } else {
      return domain
    }
  }
}

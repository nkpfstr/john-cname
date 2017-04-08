'use strict'

const fs = require('fs-extra')
const log = require('lloogg')

module.exports = (domain, path) => {
  // Require domain and path
  if (!domain || !path) {
    log.error(`You must provide a domain and a path`, `Example: cname('http://example.com', 'path/to/cname')`)
  } else {
    // Strip protocol from domain if present
    if (domain.startsWith('http://') || domain.startsWith('https://')) {
      domain = domain.replace(/^https?:\/\//, '')
    }

    // Generate CNAME file
    return fs.outputFile(`${path}/CNAME`, domain, err => {
      if (err) {
        log.error(err)
      }
    })
  }
}

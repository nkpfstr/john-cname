'use strict'

const test = require('ava')
const cname = require('.')

test('Protocol is removed', t => {
  t.is(cname('http://cname.cool'), 'cname.cool')
  t.is(cname('http://www.cname.cool'), 'www.cname.cool')
  t.is(cname('https://cname.cool'), 'cname.cool')
  t.is(cname('https://www.cname.cool'), 'www.cname.cool')
})

test('Trailing slashes are removed', t => {
  t.is(cname('http://cname.cool/'), 'cname.cool')
  t.is(cname('http://www.cname.cool/'), 'www.cname.cool')
  t.is(cname('https://cname.cool/'), 'cname.cool')
  t.is(cname('https://www.cname.cool/'), 'www.cname.cool')
  t.is(cname('//cname.cool/'), 'cname.cool')
  t.is(cname('//www.cname.cool/'), 'www.cname.cool')
  t.is(cname('cname.cool/'), 'cname.cool')
  t.is(cname('www.cname.cool/'), 'www.cname.cool')
})

test('Error is thrown if domain argument is not found', t => {
  t.throws(() => {
    cname()
  }, 'You must provide a domain')
})

test('Error is thrown if path provided is not a string', t => {
  t.throws(() => {
    cname('http://cname.cool', {})
  }, Error)
})

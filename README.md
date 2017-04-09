# john-cname
> A [bad pun](https://youtu.be/ZJZRsawg6nc) that turns domains into CNAME files


## Install
NPM:
```
$ npm install john-cname
```

Yarn:
```
$ yarn add john-cname
```

## Usage
```js
const cname = require('john-cname')

cname('http://cname.cool/', 'build')
// Outputs a properly formatted CNAME file in ./build
```

## API

### cname(domain, [path])

#### domain
Type: `string`
Domain the CNAME file should contain. Protocols and trailing slashes are automatically removed.
```js
cname('http://cname.cool/', 'build')
// -> cname.cool
```

#### path
Type: `string`
Path to output the CNAME file.
```js
cname('http://cname.cool/', 'build')
// -> ./build/CNAME
```

## License
MIT &copy; Nick Pfisterer

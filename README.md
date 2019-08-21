## versioned-react-component

server side render react component by react version

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/versioned-react-ssr.svg?style=flat-square
[npm-url]: http://npmjs.org/package/versioned-react-ssr
[travis-image]: https://img.shields.io/travis/yiminghe/versioned-react-ssr.svg?style=flat-square
[travis-url]: https://travis-ci.org/yiminghe/versioned-react-ssr
[coveralls-image]: https://img.shields.io/coveralls/yiminghe/versioned-react-ssr.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yiminghe/versioned-react-ssr?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=10.0.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/versioned-react-ssr.svg?style=flat-square
[download-url]: https://npmjs.org/package/versioned-react-ssr

### usage

```js
const render = require("versioned-react-component");
expect(
  render.renderComponentCodeToString({
    props: {
      title: "my"
    },
    // version:'16.9.0', // currently only support 16.9.0
    // build by rollup iife
    componentCode: `
        var x=function(props){ return React.createElement('div', {},props.title);};
      `
  })
).toMatchInlineSnapshot(`"<div data-reactroot=\\"\\">my</div>"`);
```

### methods

- renderComponentCodeToString
- renderComponentCodeToStaticMarkup
- renderComponentCodeToNodeStream
- renderComponentCodeToStaticNodeStream

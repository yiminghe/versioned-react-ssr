const defaultVersion = '16.9.0';
const map = {
  [defaultVersion]: 1,
};

exports.renderComponentCodeToString = function ({ componentCode, props = {}, version = defaultVersion }) {
  if (map[version] !== 1) {
    console.warn(`versioned-react-ssr can no find react ssr version: ${version}, use ${defaultVersion}`);
    version = defaultVersion;
  }
  var React = require(`./${version}/react`);
  var ReactDOMServer = require(`./${version}/react-dom-server`);

  componentCode = componentCode.trim().replace(/^var\s+[\w_]+\s*=\s*(?=function)/, '');

  if (componentCode.endsWith(';')) {
    componentCode = componentCode.slice(0, componentCode.length - 1);
  }

  const Component = eval('(' + componentCode + ')');

  return ReactDOMServer.renderToString(React.createElement(Component, props));
};

exports.renderComponentCodeToStaticMarkup = function ({ componentCode, props = {}, version = defaultVersion }) {
  if (map[version] !== 1) {
    console.warn(`versioned-react-ssr can no find react ssr version: ${version}, use ${defaultVersion}`);
    version = defaultVersion;
  }
  var React = require(`./${version}/react`);
  var ReactDOMServer = require(`./${version}/react-dom-server`);

  componentCode = componentCode.trim().replace(/^var\s+[\w_]+\s*=\s*(?=function)/, '');

  if (componentCode.endsWith(';')) {
    componentCode = componentCode.slice(0, componentCode.length - 1);
  }

  const Component = eval('(' + componentCode + ')');

  return ReactDOMServer.renderToStaticMarkup(React.createElement(Component, props));
};

exports.renderComponentCodeToNodeStream = function ({ componentCode, props = {}, version = defaultVersion }) {
  if (map[version] !== 1) {
    console.warn(`versioned-react-ssr can no find react ssr version: ${version}, use ${defaultVersion}`);
    version = defaultVersion;
  }
  var React = require(`./${version}/react`);
  var ReactDOMServer = require(`./${version}/react-dom-server`);

  componentCode = componentCode.trim().replace(/^var\s+[\w_]+\s*=\s*(?=function)/, '');

  if (componentCode.endsWith(';')) {
    componentCode = componentCode.slice(0, componentCode.length - 1);
  }

  const Component = eval('(' + componentCode + ')');

  return ReactDOMServer.renderToNodeStream(React.createElement(Component, props));
};

exports.renderComponentCodeToStaticNodeStream = function ({ componentCode, props = {}, version = defaultVersion }) {
  if (map[version] !== 1) {
    console.warn(`versioned-react-ssr can no find react ssr version: ${version}, use ${defaultVersion}`);
    version = defaultVersion;
  }
  var React = require(`./${version}/react`);
  var ReactDOMServer = require(`./${version}/react-dom-server`);

  componentCode = componentCode.trim().replace(/^var\s+[\w_]+\s*=\s*(?=function)/, '');

  if (componentCode.endsWith(';')) {
    componentCode = componentCode.slice(0, componentCode.length - 1);
  }

  const Component = eval('(' + componentCode + ')');

  return ReactDOMServer.renderToStaticNodeStream(React.createElement(Component, props));
};
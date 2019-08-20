exports.renderComponentCodeToString = function ({ componentCode, props = {}, version = '16.9.0' }) {
  var React = require(`./${version}/react`);
  var ReactDOMServer = require(`./${version}/react-dom-server`);

  componentCode = componentCode.trim().replace(/^var\s+[\w_]+\s*=\s*(?=function)/, '');

  if (componentCode.endsWith(';')) {
    componentCode = componentCode.slice(0, componentCode.length - 1);
  }

  const Component = eval('(' + componentCode + ')');

  return ReactDOMServer.renderToString(React.createElement(Component, props));
};

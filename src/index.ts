const defaultVersion = '16.9.0';
const map: { [k: string]: number } = {
  [defaultVersion]: 1,
};

interface Config {
  componentCode: string;
  props?: { [k: string]: any };
  version?: string;
}

function render(
  { componentCode, props = {}, version = defaultVersion }: Config,
  method: string,
) {
  if (map[version] !== 1) {
    console.warn(
      `versioned-react-ssr can no find react ssr version: ${version}, use ${defaultVersion}`,
    );
    version = defaultVersion;
  }
  var React = require(`../react-version/${version}/react`);
  var ReactDOMServer = require(`../react-version/${version}/react-dom-server`);

  componentCode = componentCode
    .trim()
    .replace(/^var\s+[\w_]+\s*=\s*(?=function)/, '');

  if (componentCode.endsWith(';')) {
    componentCode = componentCode.slice(0, componentCode.length - 1);
  }

  const Component = eval('(' + componentCode + ')');

  return ReactDOMServer[method](React.createElement(Component, props));
}

export function renderComponentCodeToString(config: Config) {
  return render(config, 'renderToString');
}

export function renderComponentCodeToStaticMarkup(config: Config) {
  return render(config, 'renderToStaticMarkup');
}

export function renderComponentCodeToNodeStream(config: Config) {
  return render(config, 'renderToNodeStream');
}

export function renderComponentCodeToStaticNodeStream(config: Config) {
  return render(config, 'renderToStaticNodeStream');
}

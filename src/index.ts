const defaultVersion = '16.9.0';
const map: { [k: string]: number } = {
  [defaultVersion]: 1,
};

export interface ISSRRenderConfig {
  componentCode: string;
  props?: { [k: string]: any };
  version?: string;
}

function render(
  { componentCode, props = {}, version = defaultVersion }: ISSRRenderConfig,
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
    .replace(/^var\s+[\w_]+\s*=\s*(?=\(?function)/, '')
    .replace(/;$/, '');

  const Component = eval('(' + componentCode + ')');

  return ReactDOMServer[method](React.createElement(Component, props));
}

export function renderComponentCodeToString(config: ISSRRenderConfig) {
  return render(config, 'renderToString');
}

export function renderComponentCodeToStaticMarkup(config: ISSRRenderConfig) {
  return render(config, 'renderToStaticMarkup');
}

export function renderComponentCodeToNodeStream(config: ISSRRenderConfig) {
  return render(config, 'renderToNodeStream');
}

export function renderComponentCodeToStaticNodeStream(config: ISSRRenderConfig) {
  return render(config, 'renderToStaticNodeStream');
}

import * as render from '../src/index';

describe('render component', () => {
  it('render component to string', () => {
    expect(
      render.renderComponentCodeToString({
        props: {
          title: 'my',
        },
        componentCode: `
        var x=function(props){ return React.createElement('div', {},props.title);};
      `,
      }),
    ).toMatchInlineSnapshot(`"<div data-reactroot=\\"\\">my</div>"`);
  });

  it('should warn and use defaultVersion', () => {
    const defaultVersion = '16.9.0';
    const version = '0.1.0';
    const consoleWarn = jest.spyOn(console, 'warn');
    render.renderComponentCodeToString({
      props: {
        title: 'my',
      },
      componentCode: `
      var x=function(props){ return React.createElement('div', {},props.title);};
    `,
      version,
    });
    expect(consoleWarn.mock.calls.length).toBe(1);
    expect(consoleWarn.mock.calls[0][0]).toContain(
      `versioned-react-ssr can no find react ssr version: ${version}, use ${defaultVersion}`,
    );
    consoleWarn.mockRestore();
  });

  it('render component to string without props', () => {
    expect(
      render.renderComponentCodeToString({
        componentCode: `
        var x=function(props){ return React.createElement('div', {});};
      `,
      }),
    ).toMatchInlineSnapshot(`"<div data-reactroot=\\"\\"></div>"`);
  });

  it('render component to string not ends with ";"', () => {
    expect(
      render.renderComponentCodeToString({
        componentCode: `
        var x=function(props){ return React.createElement('div', {});}
      `,
      }),
    ).toMatchInlineSnapshot(`"<div data-reactroot=\\"\\"></div>"`);
  });

  it('render component to static markup', () => {
    expect(
      render.renderComponentCodeToStaticMarkup({
        props: {
          title: 'my',
        },
        componentCode: `
        var x=function(props){ return React.createElement('div', {},props.title);};
      `,
      }),
    ).toMatchInlineSnapshot(`"<div>my</div>"`);
  });

  it('render component to node stream', cb => {
    let htmlStr = '';
    const renderStream = render.renderComponentCodeToNodeStream({
      props: {
        title: 'my',
      },
      componentCode: `
      var x=function(props){ return React.createElement('div', {},props.title);};
    `,
    });
    renderStream.on('data', (chunk: typeof Buffer) => {
      htmlStr += chunk.toString();
    });
    renderStream.on('end', () => {
      expect(htmlStr).toMatchInlineSnapshot(
        `"<div data-reactroot=\\"\\">my</div>"`,
      );
      cb();
    });
  });

  it('render component to static node stream', cb => {
    let htmlStr = '';
    const renderStream = render.renderComponentCodeToStaticNodeStream({
      props: {
        title: 'my',
      },
      componentCode: `
      var x=function(props){ return React.createElement('div', {},props.title);};
    `,
    });
    renderStream.on('data', (chunk: typeof Buffer) => {
      htmlStr += chunk.toString();
    });
    renderStream.on('end', () => {
      expect(htmlStr).toMatchInlineSnapshot(`"<div>my</div>"`);
      cb();
    });
  });
});

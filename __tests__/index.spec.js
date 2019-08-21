const render = require("../lib");

describe("render component", () => {
  it("render component to string", () => {
    expect(
      render.renderComponentCodeToString({
        props: {
          title: "my"
        },
        componentCode: `
        var x=function(props){ return React.createElement('div', {},props.title);};
      `
      })
    ).toMatchInlineSnapshot(`"<div data-reactroot=\\"\\">my</div>"`);
  });

  it("render component to static markup", () => {
    expect(
      render.renderComponentCodeToStaticMarkup({
        props: {
          title: "my"
        },
        componentCode: `
        var x=function(props){ return React.createElement('div', {},props.title);};
      `
      })
    ).toMatchInlineSnapshot(`"<div>my</div>"`);
  });

  it("render component to node stream", cb => {
    let htmlStr = "";
    const renderStream = render.renderComponentCodeToNodeStream({
      props: {
        title: "my"
      },
      componentCode: `
      var x=function(props){ return React.createElement('div', {},props.title);};
    `
    });
    renderStream.on("data", chunk => {
      htmlStr += chunk.toString();
      console.log(htmlStr);
    });
    renderStream.on("end", () => {
      expect(htmlStr).toMatchInlineSnapshot(`"<div data-reactroot=\\"\\">my</div>"`);
      cb()
    });
  });

  it("render component to static node stream", cb => {
    let htmlStr = "";
    const renderStream = render.renderComponentCodeToStaticNodeStream({
      props: {
        title: "my"
      },
      componentCode: `
      var x=function(props){ return React.createElement('div', {},props.title);};
    `
    });
    renderStream.on("data", chunk => {
      htmlStr += chunk.toString();
      console.log(htmlStr);
    });
    renderStream.on("end", () => {
      expect(htmlStr).toMatchInlineSnapshot(`"<div>my</div>"`);
      cb()
    });
  });
});

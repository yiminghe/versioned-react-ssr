const render = require("../lib");

describe("render component", () => {
  it("works", () => {
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
});

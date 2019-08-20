## versioned-react-component

server side render react component by react version


### usage

```js
const render=require('versioned-react-component');
expect(
      render.renderComponentCodeToString({
        props: {
          title: "my"
        },
        // build by rollup iife
        componentCode: `
        var x=function(props){ return React.createElement('div', {},props.title);};
      `
      })
    ).toMatchInlineSnapshot(`"<div data-reactroot=\\"\\">my</div>"`);
```

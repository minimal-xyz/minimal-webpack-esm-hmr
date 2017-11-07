
Webpack ESM HRM
----

> similar to CJS, but you don't need to call require again. It's just updated. You may also omit the callback.
> -- by [@wSokra](https://twitter.com/wSokra/status/871983408125280256)

```js
import {a} from './lib';

if (module.hot) {
  module.hot.accept('./lib', function() {
    console.log('updated lib');
    console.log('then a is:', a);
  });
}
```

### For Babel users

HMR breaks in Babel since Babel tranpiled `import` syntax. Need to [add `{modules: false}` in Babel](https://twitter.com/wSokra/status/927790829917429760). For example:

```js
{
  test: /\.jsx$/,
  exclude: /(node_modules)/,
  loader: "babel-loader",
  query: {
    presets: [["env", { modules: false }]],
    plugins: ["transform-react-jsx"]
  }
}
```

### Usage

```bash
yarn
yarn watch
# then open localhost:8080
```

### License

MIT

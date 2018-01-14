# rollup-plugin-postprocess

[![Greenkeeper badge](https://badges.greenkeeper.io/developit/rollup-plugin-postprocess.svg)](https://greenkeeper.io/)

Apply regex find-and-replace postprocessing to your Rollup bundle.

## Installation

`npm i -D rollup-plugin-postprocess`

## Usage

```js
import postprocess from 'rollup-plugin-postprocess';

export default {
    plugins: [
        postprocess([
            [/\b(module\.exports=|export default )([a-zA-Z])/, '$1$2']
        ])
    ]
}
```


## License

[MIT](https://oss.ninja/mit/developit)

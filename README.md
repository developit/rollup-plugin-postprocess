# rollup-plugin-postprocess [![npm](https://img.shields.io/npm/v/rollup-plugin-postprocess.svg?style=flat)](https://www.npmjs.org/package/rollup-plugin-postprocess) [![travis](https://travis-ci.org/developit/rollup-plugin-postprocess.svg?branch=master)](https://travis-ci.org/developit/rollup-plugin-postprocess)

Apply regex find-and-replace postprocessing to your Rollup bundle.


## Installation

`npm i -D rollup-plugin-postprocess`


## Usage

Works just like a [JavaScript String replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), including the funtion callback option.

`postprocess()` expects an Array of `[(RexExp) find, (String|Function) replace]` pairs. Alternatively, if a function is provided, it will be invoked for each bundle and can return said pairs.


## Example

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

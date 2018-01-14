# rollup-plugin-postprocess

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

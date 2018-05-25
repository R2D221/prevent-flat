# prevent-flat

The purpose of this library is to prevent TC39 from adding Array.prototype.flat as a replacement names for Array.prototype.flatten. They usually don't listen to popular votes, but they do listen to the Web and usages of JavaScript in the wild. So here's your chance to vote with your code in production. Put this library in your production large-scale website (it's very tiny! won't hurt) and we'll have a compelling case for TC39 not to break backwards compatibility.

## Install

```html
<script type="text/javascript" src="https://unpkg.com/prevent-flat@1.0.0/index.js"></script>
```

## Usage

`array.flat()` is the same as `array[0]` so if you have `array[0]` somewhere, just replace it.

That should do the trick.

## License

MIT

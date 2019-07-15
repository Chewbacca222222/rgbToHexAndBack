# rgbToHexAndBack

### Installation instructions

Simply include `rgbToHexAndBack.min.js` at the bottom of your html document or paste the code into your Js application.

### How to use

To use call the function `rgbHex()` with a rgb or hex string inside, this will return the color in the opposing format.

#### Examples

`rgbHex("#1234ab")` or `rgbHex("1234ab")` - will both return `rgb(18,52,171)` hint the `#` can be there but isn’t essential

`rgbHex("#1234ab99")` or `rgbHex("1234ab99")` - will both return `rgba(18,52,171,153)`

`rgbHex("rgb(100,200,0)")` or `rgbHex("100,200,0")` - will both return `#64c800` hint the `rgb( )` can be there but isn’t essential

`rgbHex("rgba(100,200,0,20)")` or `rgbHex("100,200,0,20")` - will both return `#64c80014`

### Errors

If the input is not formatted correctly / not a string `undefined` will be returned.

### Limitations

If the data is incorrectly formatted, it wont return anything, I’ve tried to accept as many formats as possible though.

### Feedback

Spot any bugs? Want a new feature adding? Just drop me a message, would love to help :heart:
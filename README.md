# Bgimg

Make images become `background-image`s for HTML elements.

# Installation

`jQuery` is a dependency for `jquery.bgimg.js`.

Clone this repo then copy `jquery.bgimg.js` into your project directory.

```html
<script src="jquery.min.js"></script>
<script src="jquery.bgimg.js"></script>
```

# Options

| Option        | Description   |
| ------------- | ------------- |
| `data-bgimg` `backgroundImage`  | The image that you want as background |
| `data-bgimg-repeat` `backgroundRepeat`      | The option for how your background image is repeated      |
| `data-bgimg-size` `backgroundSize` | The size of your background image      |
| `data-bgimg-position` `backgroundPosition` | The position of your background image |
| `data-bgimg-color` `backgroundColor` | *Bonus* The background color of your target element |

*Note: data-attributes take precedence over options declared using JS.*

# Example
```html
<div
    data-bgimg="./assets/200x200-4.png"
    data-bgimg-repeat="no-repeat"
    data-bgimg-size="cover"
    data-bgimg-position="center center"
    data-bgimg-color="transparent"
    id="demo"
    ></div>

<script type="text/javascript">
    $('#demo').bgimg();
</script>
```

Check out the [demo](./demo/) directory for more examples on how to use this plugin.

# License

This software is licensed under [The MIT License](./LICENSE).
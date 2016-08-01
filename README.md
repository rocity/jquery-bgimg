# Bgimg
Make images become `background-image`s for HTML elements

# Example
```html
<div
    class="bgimg"
    data-bgimg="./assets/200x200-4.png"
    data-bgimg-repeat="no-repeat"
    data-bgimg-size="cover"
    data-bgimg-position="center center"
    data-bgimg-color="transparent"
    id="demo"
    ></div>
```

# Installation
Clone this repo then copy bgimg.js into your project directory

```html
<script src="bgimg.js"></script>
```

Add the class `.bgimg` to your target element then use the `data` attributes given below to assign the options that you want in your element. See example above.

# Options
| Option        | Description   |
| ------------- | ------------- |
| data-bgimg  | The image that you want as background |
| data-bgimg-repeat      | The option for how your background image is repeated      |
| data-bgimg-size | The size of your background image      |
| data-bgimg-position | The position of your background image |
| data-bgimg-color | Bonus* The background color of your target element |

# License

This software is licensed under [The MIT License](./LICENSE).
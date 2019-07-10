# ani.css

**ani.css** is a highly customizable CSS/SCSS library perfect for adding simple animations to your website. Choose between CSS Custom Vars &amp; Utility Classes for an experience that suit you.

**ani** comes with a gulp file set up so that you can edit and compile the library to your hearts content.

There are three ways to use **ani**, CSS Custom Variables, Utility Classes or Both. By default, ani has both methods ready to go, reduce your file size by simply commenting out the method you DON'T want to use, compile and you're good to go.

All animations are stored in an easy to navigate folder structure so you can easily see what animations are present, just simply comment out any animations you do not want before compiling to reduce the file size.

---

## Methods

### CSS Custom Variables

This is the preferred method, it gives you as a developer greater customization options, less unused code and takes advantage of newer technologies.

Use the class `ani--sh` or `ani--shorthand`

```
<div class="ani--sh">
</div>
```

Add relevant CSS Vars with desired values in the elements style tag.

```
<div class="ani--sh" style="--ani--name: fade-in-top; --ani--speed: .25s; --ani--timing: cubic-bezier(0.25, 0.46, 0.45, 0.94); --ani--delay: .25s; --ani--loop: 1; --ani--dir: normal; --ani--fill: forwards;">
</div>
```

You can pass as few or as many css custom vars as you'd like through the style tag, you can add these as if you're writing an `animation:` property in CSS.

```
animation: fade-in-top .25s ease;
```

```
<div class="ani--sh" style="--ani--name: fade-in-top; --ani--speed: .25s; --ani--timing: ease;">
</div>
```

| Possible Vars  |                |                 |
| -------------- | -------------- | --------------- |
| `--ani--name`  | `--ani--speed` | `--ani--timing` |
| `--ani--delay` | `--ani--loop`  | `--ani--dir`    |
| `--ani--fill`  |                |                 |

### Utility Classes

This is method is probably more familiar to most people has a few drawbacks performance wise. As a developer you have less customization options, and more unused code as all possible values for each animation property has it's own class. As you can imagine this adds a lot of code, a lot of which you may never need/use. You also have less control over timings, any properties set to a time will have a class for every hundred milliseconds up to 1500, you may never need more that that but it's still limiting.

All the utility classes are customizable should you wish too, just make sure you compile the files after any changes.

Use the class `ani` to state this element will be animated

```
<div class="ani">
</div>
```

`ani` needs to be followed by classes setting other animation properties, i.e

```
<div class="ani ani--fade-in ani--speed__200 ani--timing__ease">
</div>
```

---

### CSS Custom Variables & Utility Classes

This method allows you to use a mixture of both methods, however, you can still comment out the `_custom-vars.scss` file from the base file as you will not need it for this. This method works by using existing Utility Classes where possible and then using CSS Vars in other places where you need more customization by adding `__var` to the end of the class.

For example, here you can see we use a utility class for the animation name but a custom var for the speed and timing function as those values do not exist in our library of utility classes.

```
<div class="ani ani--fade-in__fwd ani--speed__var ani--timing__var"  style="--ani--speed: 1.25ss; --ani--timing:cubic-bezier(0.25, 0.46, 0.45, 0.94);">
</div>
```

---

## Compiling

This library comes with a gulpfile and package file set up and ready to go, just simply head to the project root and do the following:

Running gulp tasks will compile all files within the src folder to minified files in the dist folder.

### Set Up - This sets up node with all our dependencies

```
npm install
```

### Compile

`gulp watch` requires you to make changes to a file.

```
gulp scripts

or

gulp styles

or

gulp watch
```

---

#### :sparkles: Inspiration :sparkles:

-   [animate.css](https://daneden.github.io/animate.css/) by [Daniel Eden](https://daneden.me/)
-   [animista](http://animista.net/) by [Ana Travas](https://twitter.com/ana108)

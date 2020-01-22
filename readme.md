# ani.css

**ani.css** is a highly customizable CSS/SCSS library perfect for adding simple animations to your website. Choose between CSS Custom Properties &amp; Utility Classes for an experience that suit you.

**ani** comes with a gulp file set up so that you can edit and compile the library to your hearts content.

There are two ways to use **ani**, CSS Custom Properties or Utility Classes or Both. By default, ani uses CSS Custom Properties, reduce your file size by simply commenting out the method you DON'T want to use, compile and you're good to go.

All animations are stored in an easy to navigate folder structure so you can easily see what animations are present, just simply comment out any animations you do not want before compiling to reduce the file size.

---

## Methods

### CSS Custom Variables

This is the preferred method, it gives you as a developer greater customization options, less unused code and takes advantage of newer technologies.

Use the class `ani`, `ani-in`, `ani-out`

```
<div class="ani:true">
</div>
```

Add relevant CSS Vars with desired values in the elements style tag.

```
<div class="ani:true" style="--ani-name: fade-in-top; --ani-speed: .25s; --ani-timing: cubic-bezier(0.25, 0.46, 0.45, 0.94); --ani-delay: .25s; --ani-loop: 1; --ani-dir: normal; --ani-fill: forwards;"></div>
```

You can pass as few or as many css custom vars as you'd like through the style tag, you can add these as if you're writing an `animation:` property in CSS.

```
animation: fade-in-top .25s ease;
```

```
<div class="ani:true" style="--ani--name: kenburns-top; --ani--speed: .5s; --ani-loop: infinite; --ani--timing: var(--ani-easeInOutQuad);"></div>
<div class="ani-in:true" style="--ani-in-name: fade-in-top; --ani-in-speed: .25s; --ani-in-timing: var(--ani-easeInQuad);"></div>
<div class="ani-out:true" style="--ani-out-name: fade-out; --ani-out-speed: .25s; --ani-out-timing: var(--ani-easeOutQuad);"></div>

```

| Possible Vars | Class `ani`   |                |
| ------------- | ------------- | -------------- |
| `--ani-name`  | `--ani-speed` | `--ani-timing` |
| `--ani-delay` | `--ani-loop`  | `--ani-dir`    |
| `--ani-fill`  |               |                |

| Possible Vars    | Class: `ani-in`, `ani-in:true` |                   |
| ---------------- | ------------------------------ | ----------------- |
| `--ani-in-name`  | `--ani-in-speed`               | `--ani-in-timing` |
| `--ani-in-delay` | `--ani-in-loop`                | `--ani-in-dir`    |
| `--ani-in-fill`  |                                |                   |

| Possible Vars     | Class: `ani-out`, `ani-out:true` |                    |
| ----------------- | -------------------------------- | ------------------ |
| `--ani-out-name`  | `--ani-out-speed`                | `--ani-out-timing` |
| `--ani-out-delay` | `--ani-out-loop`                 | `--ani-out-dir`    |
| `--ani-out-fill`  |                                  |                    |

| Possible Vars       | Timing Functions     |                        |
| ------------------- | -------------------- | ---------------------- |
| `--ani-ease`        | `--ani-easeIn`       | `--ani-easeOut`        |
| `--ani-easeInOut`   | `--ani-linear`       |                        |
| `--ani-easeInSine`  | `--ani-easeOutSine`  | `--ani-easeInOutSine`  |
| `--ani-easeInCubic` | `--ani-easeOutCubic` | `--ani-easeInOutCubic` |
| `--ani-easeInQuint` | `--ani-easeOutQuint` | `--ani-easeInOutQuint` |
| `--ani-easeInCirc`  | `--ani-easeOutCirc`  | `--ani-easeInOutCirc`  |
| `--ani-easeInQuad`  | `--ani-easeOutQuad`  | `--ani-easeInOutQuad`  |
| `--ani-easeInQuart` | `--ani-easeOutQuart` | `--ani-easeInOutQuart` |
| `--ani-easeInExpo`  | `--ani-easeOutExpo`  | `--ani-easeInOutExpo`  |
| `--ani-easeInBack`  | `--ani-easeOutBack`  | `--ani-easeInOutBack`  |

---

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
<div class="ani ani--fade-in ani--speed__200 ani--timing__ease"></div>
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
gulp styles

or

gulp watch
```

---

#### :sparkles: Inspiration :sparkles:

-   [animate.css](https://daneden.github.io/animate.css/) by [Daniel Eden](https://daneden.me/)
-   [animista](http://animista.net/) by [Ana Travas](https://twitter.com/ana108)

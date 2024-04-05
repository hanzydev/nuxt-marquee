# Nuxt Marquee

A lightweight Nuxt 3 component that harnesses the power of CSS animations to create silky smooth marquees.

![nuxt-marquee](https://media.giphy.com/media/6ritiN2cpvpsyz4fo6/giphy.gif)

## Installation

```sh
npx nuxi@latest module add marquee
```

## Usage

To use this module, add it to the `modules` section of your `nuxt.config.ts` file.

```ts
export default defineNuxtConfig({
  // ..
  modules: ["nuxt-marquee"],
});
```

## Example

```html
<template>
  <NuxtMarquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </NuxtMarquee>
</template>
```

## Props

| Property          | Type                                | Default           | Description                                                                                                                                                                                          |
| :---------------- | :---------------------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style`         | `CSSProperties`                     | `{}`     | Inline style for the container div                                                                                                                                                                   |
| `class`     | `any`                            | `""`     | Name of the css class to style the container div                                                                                                                                                     |
| `autoFill`      | `boolean`                           | `false`  | Whether to automatically fill blank space in the marquee with copies of the children or not                                                                                                          |
| `play`          | `boolean`                           | `true`   | Whether to play or pause the marquee                                                                                                                                                                 |
| `pauseOnHover`  | `boolean`                           | `false`  | Whether to pause the marquee when hovered                                                                                                                                                            |
| `pauseOnClick`  | `boolean`                           | `false`  | Whether to pause the marquee when clicked                                                                                                                                                            |
| `direction`     | `"left" \| "right"\| "up"\| "down"` | `"left"` | The direction the marquee slides <br /><br /> **Warning:** Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them |
| `speed`         | `number`                            | `50`     | Speed calculated as pixels/second                                                                                                                                                                    |
| `delay`         | `number`                            | `0`      | Duration to delay the animation after render, in seconds                                                                                                                                             |
| `loop`          | `number`                            | `0`      | The number of times the marquee should loop, 0 is equivalent to infinite                                                                                                                             |
| `gradient`      | `boolean`                           | `false`  | Whether to show the gradient or not                                                                                                                                                                  |
| `gradientColor` | `string`                            | `white`  | The color of the gradient                                                                                                                                                                            |
| `gradientWidth` | `number \| string`                  | `200`    | The width of the gradient on either side                                                                                                                                                             |     |

## Events

| Event Name      | Description                                                                                                  |
| :-------------- | :----------------------------------------------------------------------------------------------------------- |
| `finish`        | Emitted when the marquee finishes scrolling and stops. Only calls if loop is non-zero.                       |
| `cycleComplete` | Emitted when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead). |

## License

[MIT](https://github.com/hanzydev/nuxt-marquee/blob/main/LICENSE) - Made with 💙 by [Hànzy](https://hanzy.dev)
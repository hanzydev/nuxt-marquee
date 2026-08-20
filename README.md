# Nuxt Marquee

A lightweight Nuxt module that harnesses the power of CSS animations to create silky smooth marquees. Powered by [vue-fast-marquee](https://github.com/hanzydev/vue-fast-marquee).

[🎮 **Interactive Playground / Demo**](https://hanzydev.github.io/vue-fast-marquee/)

> 📌 **Upgrading to v2.x**: Vertical marquees now use native CSS column layouts (no manual width/height swapping needed). This release also adds interactive drag scrubbing (`draggable`), programmatic playback methods (`play`, `pause`, `reset`, etc.), and dark mode gradient support (`gradientColorDark`).

## 🚀 What's New in v2.x

- 🖱️ **Drag-to-Scrub**: Set `draggable` to allow users to drag or swipe to scrub through marquee content.
- 🎮 **Imperative Controls**: Access component playback methods (`play()`, `pause()`, `toggle()`, `reset()`) and state via template refs.
- 🌙 **Dark Mode Gradient**: Added `gradientColorDark` for dark mode gradient masks (activates when `.dark` class is present).
- 📐 **Native Vertical Marquee**: Vertical directions (`up` / `down`) now render natively with CSS flex column layout and vertical gradients.
- ⚡ **Smooth Playback**: Improved hover and click pause handling to work seamlessly alongside drag scrubbing.

## Installation

```sh
npx nuxi@latest module add marquee
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

| Property            | Type                                  | Default          | Description                                                                                                                   |
| :------------------ | :------------------------------------ | :--------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `autoFill`          | `boolean`                             | `false`          | Whether to automatically fill blank space in the marquee with copies of the children or not                                  |
| `play`              | `boolean`                             | `true`           | Whether to play or pause the marquee                                                                                          |
| `pauseOnHover`      | `boolean`                             | `false`          | Whether to pause the marquee when hovered                                                                                     |
| `pauseOnClick`      | `boolean`                             | `false`          | Whether to pause the marquee when clicked                                                                                     |
| `direction`         | `"left" \| "right" \| "up" \| "down"` | `"left"`         | The direction the marquee is sliding                                                                                          |
| `speed`             | `number`                              | `50`             | Speed calculated as pixels/second                                                                                             |
| `delay`             | `number`                              | `0`              | Duration to delay the animation after render, in seconds                                                                      |
| `loop`              | `number`                              | `0`              | The number of times the marquee should loop, 0 is equivalent to infinite                                                      |
| `gradient`          | `boolean`                             | `false`          | Whether to show the gradient mask on the edges or not                                                                         |
| `gradientColor`     | `string`                              | `"white"`        | The color of the gradient mask                                                                                                |
| `gradientColorDark` | `string`                              | `gradientColor`  | The color of the gradient mask in dark mode (activates when `.dark` class is present). Defaults to `gradientColor` if not set |
| `gradientWidth`     | `number \| string`                    | `200`            | The width/height of the gradient on either side (in pixels or CSS unit string)                                                |
| `draggable`         | `boolean`                             | `false`          | Enable manual dragging/swiping with pointer/touch to scrub through the marquee                                                |

## Events

| Event Name      | Description                                                                                                  |
| :-------------- | :----------------------------------------------------------------------------------------------------------- |
| `finish`        | Emitted when the marquee finishes scrolling and stops. Only calls if loop is non-zero.                       |
| `cycleComplete` | Emitted when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead). |

## Component Methods

Access methods programmatically using a Vue template ref:

```html
<script setup lang="ts">
import { NuxtMarquee } from '#components';

const marqueeRef = ref<InstanceType<typeof NuxtMarquee>>();
</script>

<template>
    <NuxtMarquee ref="marqueeRef">...</NuxtMarquee>
    <button @click="marqueeRef?.pause()">Pause</button>
    <button @click="marqueeRef?.reset()">Reset</button>
</template>
```

| Method / Property | Type                   | Description                                   |
| :---------------- | :--------------------- | :-------------------------------------------- |
| `play()`          | `() => void`           | Starts or resumes the animation               |
| `pause()`         | `() => void`           | Pauses the animation                          |
| `toggle()`        | `() => void`           | Toggles between play and pause                |
| `reset()`         | `() => void`           | Resets animation time to 0 and starts playing |
| `isPlaying`       | `ComputedRef<boolean>` | Whether the animation is currently playing    |
| `isPaused`        | `ComputedRef<boolean>` | Whether the animation is currently paused     |

## License

[MIT](https://github.com/hanzydev/nuxt-marquee/blob/main/LICENSE) - Made with 💙 by [Hànzy](https://hanzy.dev)

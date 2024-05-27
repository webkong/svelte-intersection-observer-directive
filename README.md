# intersection observer for svelte

[![NPM][npm]][npm-url]

## Try it in the Svelte REPL

[Svelte REPL.t](https://svelte.dev/repl/8ca4cf603c5d4841b5b1a77fa85c6c54?version=4.2.17)

## Usage

## Installation

```sh
# npm
npm i -D svelte-intersection-observer-directive

# Yarn
yarn add -D svelte-intersection-observer-directive

```

## in components

```svelte
<script>
import intersection from 'svelte-intersection-observer-directive';
</script>
<div
  use:intersection={{ threshold: 0.5, once: true }}
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}>
  Hello world
</div>
```

## API

### Props

| Name       | Description                                              | Type                                                               | Default value |
| :--------- | :------------------------------------------------------- | :----------------------------------------------------------------- | :------------ |
| once       | Unobserve the element after the first intersection event | `boolean`                                                          | `false`       |
| root       | Containing                                               |
| rootMargin | Margin offset of the containing element                  | `string`                                                           | `"0px"`       |
| threshold  | Percentage of element visibile to trigger an event       | `number` between 0 and 1, or an array of `number`s between 0 and 1 | `0`           |

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-intersection-observer-directive.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-intersection-observer-directive-directive

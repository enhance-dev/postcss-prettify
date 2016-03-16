# WARNING &mdash; recent breaking changes yet to be reflected in readme or changelog &mdash; will update ASAP

# `postcss-prettify` [![version][1]][2] [![build][3]][4] [![coverage][5]][6]

<b>[About](#about)</b> |
<b>[Installation](#installation)</b> |
<b>[Usage](#usage)</b> |
<b>[License](#license)</b>

---

## About

A [PostCSS](https://github.com/postcss/postcss) plugin to prettify output. Requires `node -v` >= `v4.0.0`. Should likely be included towards the end of a PostCSS plugin chain.

**Features:**
- newlines between rules
- one selector per line

```css
/* example input */
.foo, .bar {
  background: red;
}
@media only screen and (min-width: 600px) {
  .baz {
    background: blue;
  }
}
```

```css
/* example output */
.foo,
.bar {
  background: red;
}

@media only screen and (min-width: 600px) {
  .baz {
    background: blue;
  }
}
```

## Installation

From a terminal:

```sh
npm install --save-dev postcss-prettify
```

## Usage

```javascript
postcss([
  require('postcss-prettify')
])
```

Check the [PostCSS docs](https://github.com/postcss/postcss#usage) for your chosen implementation.

## License

[MIT](https://github.com/codekirei/postcss-prettify/blob/master/license)

[1]: https://img.shields.io/npm/v/postcss-prettify.svg?style=flat-square&label=version
[2]: https://www.npmjs.com/package/postcss-prettify
[3]: https://img.shields.io/travis/codekirei/postcss-prettify.svg?style=flat-square&label=tests
[4]: https://travis-ci.org/codekirei/postcss-prettify
[5]: http://img.shields.io/coveralls/codekirei/postcss-prettify.svg?style=flat-square
[6]: https://coveralls.io/github/codekirei/postcss-prettify?branch=master

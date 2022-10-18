#

## ToDo

- [ ] https://nextjs.org/learn/basics/data-fetching

## serving images

- images served from public directory
- use the `import Image from 'next/image'` instead of classic HTML img tag
- faster page load (images are loazy-loaded i.e. only when in viewport), auto-resize, auto-format, responsive, even for external images

## serving pages

### Script

- loads scripts with `import Script from 'next/script'`
- use by `<Script src... strategy... onLoad... />`

### Head

- change `<head>` to `<Head>` and `import Head from 'next/head'`
- head changes the page name in the browser tab

## Layout

- Components can be shared across all pages. create the components directory at the root of the project and create a Layout.js file
- `import Layout from '../components/Layout'`
- layouts need `/layout.module.css` format

### CSS

- import global css to the page/\_app.js
- server needs restarting after global css changes

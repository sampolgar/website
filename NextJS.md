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

# architecture

## page generation

### Static or Server-side

- Nextjs supports both in the same app
- choose static if you can render a page at build time
- choose server-side if you need to fetch data at request time e.g. page updates based on user interaction
- you can also use javascript in the browser to render a page e.g. frequently updated data like a dashboard

### implementing static or server-side
#### 

## how to implement

# blog with nextjs

use YAML Front Matter to add metadata to markdown files

- npm install gray-matter
- https://github.com/jonschlinkert/gray-matter
  e.g.

```
---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---
```

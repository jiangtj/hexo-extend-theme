# Hexo Theme Plus

[![npm](https://img.shields.io/npm/v/@jiangtj/hexo-theme-plus.svg?style=popout-square)](https://www.npmjs.com/package/@jiangtj/hexo-theme-plus)

This is a very very simple plugin. You can see [index.js](index.js).

Only replace theme file to a custom file.

```bash
yarn add @jiangtj/hexo-theme-plus
```
In hexo `_config.yml`
```yml 
theme_plus:
  views:
    path: 'layout.ejs'
    file: 'custom/layout.ejs'
# or
theme_plus:
  debug: false
  views:
    - path: 'index.ejs'
      file: 'custom/index.ejs'
    - path: 'layout.ejs'
      file: 'custom/layout.ejs'
```

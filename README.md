# Hexo Theme Plus

[![README](https://img.shields.io/badge/README-中文-blue.svg?style=popout-square)](README-ZH.md)
[![npm](https://img.shields.io/npm/v/@jiangtj/hexo-theme-plus.svg?style=popout-square)](https://www.npmjs.com/package/@jiangtj/hexo-theme-plus)

This is a very very simple plugin. You can see [index.js](index.js). Only replace any theme file in `layout` folder to a custom file.

## How to use?

```bash
yarn add @jiangtj/hexo-theme-plus
```

Any file in custom path (default `custom/theme`) will replace theme file in same path in `layout` folder. You can set another path:
```yml
theme_plus:
  custom_path: custom/theme # disabled: set 'false'
```

In hexo `_config.yml`, you can special pick up a file:
```yml 
theme_plus:
  views:
    path: 'layout.ejs'
    file: 'custom/layout.ejs'
# or
theme_plus:
  views:
    - path: 'index.ejs'
      file: 'custom/index.ejs'
    - path: 'layout.ejs'
      file: 'custom/layout.ejs'
```

# Hexo Theme Plus

[![README](https://img.shields.io/badge/README-中文-blue.svg?style=popout-square)](README-ZH.md)
[![npm](https://img.shields.io/npm/v/@jiangtj/hexo-extend-theme.svg?style=popout-square)](https://www.npmjs.com/package/@jiangtj/hexo-extend-theme)
![npm](https://img.shields.io/badge/node-%3E%3D%2010-blue.svg?style=popout-square)

This is a very very simple plugin. Only replace any theme file in `layout` folder to a custom file.

**This plugin name from `hexo-theme-plus` to `hexo-extend-theme`**

## How to use?

```bash
yarn add @jiangtj/hexo-extend-theme
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

## Pay attention

- If there is a file path in the replacement file, it may cause rendering errors
- Unable to listen for file modification. If you modify a custom file, you need to rerun 'hexo s' to view the changes

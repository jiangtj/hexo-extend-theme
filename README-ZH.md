# Hexo Theme Plus

[![README](https://img.shields.io/badge/README-ENGLISH-blue.svg?style=popout-square)](README.md)
[![npm](https://img.shields.io/npm/v/@jiangtj/hexo-theme-plus.svg?style=popout-square)](https://www.npmjs.com/package/@jiangtj/hexo-theme-plus)

这是个很简单的插件，见[index.js](index.js).唯一的工作是替换掉主题中的文件.

## 如何使用?

```bash
yarn add @jiangtj/hexo-theme-plus
```

在自定义路径(默认`custom/theme`)的文件将替换掉主题(`layout`文件夹下)中相同路径的文件.你可以设定一个其它路径:
```yml
theme_plus:
  custom_path: custom/theme # disabled: set 'false'
```

在hexo的`_config.yml`中,你可以特别的指定一个文件替换:
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
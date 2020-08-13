# Hexo Theme Plus

[![README](https://img.shields.io/badge/README-ENGLISH-blue.svg?style=popout-square)](README.md)
[![npm](https://img.shields.io/npm/v/@jiangtj/hexo-extend-theme.svg?style=popout-square)](https://www.npmjs.com/package/@jiangtj/hexo-extend-theme)

这是个很简单的插件.唯一的工作是替换掉在`layout`文件夹下的主题文件.

## 如何使用?

```bash
yarn add @jiangtj/hexo-extend-theme
```

在自定义路径(默认`custom/theme`)的文件将替换掉在`layout`文件夹下相同路径的主题文件.你可以设定一个其它路径:
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

## 需要注意点

- 替换文件中如果存在文件路径，可能会导致渲染出错
- 无法监听文件修改，如果修改自定义文件，需重新运行`hexo s`才能查看变化

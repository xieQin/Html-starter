# Html-starter
starter for static html

#### 主要内容
- 静态页面开发模板
- 使用less作为css预编译语言
- gulp命令：less文件编译合并、小图标制作雪碧图、svg图标制作雪碧图、文件变动监测
- webpack，包含简单的devServer，使用es2015开发

##### 环境依赖
需要安装node环境

```bash
node -v
npm -v
```

##### 简单使用
```bash
npm install
http-server
```

##### 使用gulp
-文件变动监测
```bash
gulp watch
```

-less文件编译合并
```bash
gulp css
```
引用方法
```html
<link href="./assets/css/main.min.css" rel="stylesheet">
```

-小图标制作雪碧图
```bash
gulp sprites
```
引用方法
```html
<link href="./assets/css/sprites.css" rel="stylesheet">
```

-svg图标制作雪碧图
```bash
gulp svg-sprites
```
引用方法
```html
<link href="./assets/css/sprite.css" rel="stylesheet">
```

#####使用webpack
-dev
```bash
npm run start
```
-build
```bash
npm run build
```

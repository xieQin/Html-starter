# Html-starter
starter for static html

### 一、主要内容
- 静态页面开发模板
- 使用less作为css预编译语言
- gulp命令：less文件编译合并、小图标制作雪碧图、svg图标制作雪碧图、文件变动监测
- webpack，包含简单的devServer，使用es2015开发

### 二、环境依赖
需要使用gulp及webpack时先安装nodejs环境

>```bash
>node -v
>npm -v
>```

### 三、简单使用
>```bash
>npm install
>http-server
>```

### 四、使用gulp
##### 1. 文件变动监测
>```bash
>gulp watch
>```

##### 2. less文件编译合并
>```bash
>gulp css
>```
引用方法
>```html
><link href="./assets/css/main.min.css" rel="stylesheet">
>```

##### 3. 小图标制作雪碧图
>```bash
>gulp sprites
>```
引用方法
>```html
><link href="./assets/css/sprites.css" rel="stylesheet">
>```

##### 4. svg图标制作雪碧图
>```bash
>gulp svg-sprites
>```
引用方法
>```html
><link href="./assets/css/sprite.css" rel="stylesheet">
>```

#### 五、使用webpack

##### 1. dev环境
>```bash
>npm run start
>```

##### 2. build环境
>```bash
>npm run build
>```

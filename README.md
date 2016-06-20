# Html-starter
- starter for static html
- gulp、less、webpack均可单独使用

### 一、主要内容
- 静态页面开发模板
- 重置css样式
- 移动端使用lib-flexible，按750设计稿制作，使用rem
- 使用less作为css预编译语言
- gulp命令：less文件编译合并、小图标制作雪碧图、svg图标制作雪碧图、文件变动监测
- webpack，包含简单的devServer，使用es2015开发

### 二、环境依赖
需要使用gulp及webpack时先安装nodejs环境

>```bash
>node -v
>
>npm -v
>```

### 三、简单使用
>```bash
>npm install
>
>http-server -p 3000
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

>```html
><link href="./assets/css/main.min.css" rel="stylesheet">
>```

##### 3. 小图标制作雪碧图
>```bash
>gulp sprites
>```

>```html
><link href="./assets/css/sprites.css" rel="stylesheet">
>```

##### 4. svg图标制作雪碧图
>```bash
>gulp svg-sprites
>```

>```html
><link href="./assets/css/sprite.css" rel="stylesheet">
>```

### 五、使用webpack

##### 1. dev环境
>```bash
>npm run start
>```

##### 2. build环境
>```bash
>npm run build
>```

### 六、事件委托的点击事件处理

##### 1. 库依赖
>```html
><script src="./assets/js/jquery-1.11.1.min.js"></script>
><script src="./assets/js/fastclick.js"></script>
>```

##### 2. 使用
>```html
><button data-action="test">hello</button>
>```

>```js
>$(function() {
>  FastClick.attach(document.body);
>
>  var actionList = {
>    //demo
>    'test': function(self) {
>      testFunc(self)
>    }
>  }
>  var $body = $(document)
>
>  $body.on('click', '[data-action]', function () {
>    var actionName = $(this).data('action')
>    var action = actionList[actionName]
>    var self = this
>    if ($.isFunction(action)) action(self)
>  })
>
>  /**
>   * [testFunc 测试方法]
>   * @param  {[type]} self [description]
>  * @return {[type]}      [description]
>   */
>  function testFunc (self) {
>    console.log(self)
>  }
>})
>```

创建一个koa服务器，该服务器监听从命令行传参的端口并用HTML进行响应，当HTTP GET请求`/`时，开始处理`ejs`模板文件。

workshop将针对服务器执行请求并验证输出。

提示

首先，安装所需的依赖项：

```
npm install co-views ejs
```

现在，设置视图：

```
const views = require('co-views');

const render = views(__dirname + '/views', {
  ext: 'ejs'
});
```

`views`目录需要自己创建，并且必须包含一个`ejs`文件,`use.ejs`内容如下：

```
<p><%= user.name.first %> is a <%= user.age %> year old <%= user.species %>.</p>
```

现在，这必须给你一些提示:它需要`user`对象，它可能看起来像：

```
const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};
```

有了以上所有这些和下面的代码将一起呈现结果，你可以很容易地解决这个问题

```
ctx.body = await render('user', {user: user});
```

祝你好运！

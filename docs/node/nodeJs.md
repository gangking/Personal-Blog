# NodeJs



# 基本概念

## 前端的主要工作是什么？

1. 绘制网页的页面（HTML）
2. 写CSS样式美化页面、写JS做网页交互（更多的是网页的特效）
3. 借助于 XHR（$.ajax   $.get   $.post）请求后端的接口；实现前后端分离开发
4. 使用前端的（框架）去完成界面的开发
5. 总结：前端的主要工作：用户能看到的东西，基本上都是前端做出来；

## 后端的主要工作是什么？

1. 后端为前端程序员暴露API接口；
2. 后端也要操作数据库；
3. 优化后端业务的性能；

## NodeJs主要做什么？

- 目前这个阶段主要用来写后端的接口
- 浏览器的JS在V8引擎中运行，node就是把V8引擎搬到了后台,即让JS能够在后台运行。

## NodeJs安装版本:LTS 和 Current 区别

1. LTS 是长期稳定版的意思（这个安装包用起来比较稳定）【推荐在企业中使用】
2. Current 是最新特征版，这个安装包中有最新的Node特性，但是，可能有一些潜藏的Bug未解决；【推荐学习或尝鲜去使用】

## node的组成部分

### 浏览器中的JS组成

- ECMAScript核心
- DOM
- BOM

node中的JS组成部分

- ECMAScript（没有DOM，BOM）

  node中没有浏览器，所以不需要DOM和BOM

- 全局成员

  console.log，setTimeout，setInterval

- 模块系统

  node中的一些核心模块

# ECMAScript6

var定义变量的缺点：

- 1.变量提升的问题
- 2.没有块级作用域（作用域不受花括号限制）

## let与const

- let 没有变量的提升用来代替var定义变量

  有{} 作用域

- const 没有变量的提升用来定义常量

  有{} 作用域 初始化的时候一定要赋值 , 赋值之后不能重新赋值

  如：const a = 1; a = 2; 发生错误

## 解构赋值

所谓的解构赋值，就是把 某个对象中的属性，当作变量，给解放出来，这样，今后就能够当作变量直接使用了

- 可以使用 `:`为解构出来的变量重命名

```
  // 对象的解构赋值,按照属性名解构
  const { name : name123, age, gender } = person
  console.log(name123)
  //数组的解构复制,按照顺序解构
  let arr: number[] = [2,3]
  let [num1,num2,num3] = arr
  console.log([num1,num2,num3])//num3=undfine
```

## 字符串扩展

1. 模板字符串

2. startsWith() 和 endsWith()

   ​	startsWith() 用来判断字符串，是否以指定的字符开头，如果是，返回值是 true，否则返回 false

   ​	endsWith() 用来判断字符串，是否以指定的字符结尾；如果是，返回值是 true，否则返回 false

3. padStart() 和 padEnd()

   ​	在字符串前面或者后面追加字符串;

   ​	参数一：表示填充完后长度为几位; 参数2：表示用什么填充

## rest参数 和 字符串的扩展

- rest参数： 在形参调用的位置 使用 ...args args是一个数组
- 字符串的扩展： 在实参的位置 使用 ...arr

```
  function show(...args){  // rest参数

  }

  var arr = [1,2,3,4]
  show(...arr);  //字符串的扩展
```

## 箭头函数

```
<!-- 标准定义   -->
var add = () => {}
<!-- 只有一个参数   -->
var add = (x) => {console.log(x)}
var add = x => console.log(x)
<!-- 只有一个参数,且只有一个返回值   -->
var add = x => {return x}
var add = x => x
<!-- 两个参数    -->
var add = (x,y) => {return x+y}
var add = (x,y) => x + y
```

1. 箭头函数的特性： 箭头函数内部的 this, 永远和 箭头函数外部的 this 保持一致；
2. 箭头函数，本质上就是一个匿名函数
3. 注意： 如果我们省略了 右侧的 { }， 那么，默认就会把 右侧函数体中的代码执行结果，返回出去     (x, y) => { return  x + y }   可以简写成    (x, y) => x + y

## 文件操作

### 文件读取

fs.readFile(path,[,options],callback)

- path 文件路径 
- options 可选的字符编码 默认为null
- callback  回调函数 
  - err 错误消息
  - data 文件内容 

```
  fs.readFile('./files/1.txt','utf-8',(err,dataStr)=>{
    if(err) throw err
    console.log(dataStr)
  })
```

### 文件写入

fs.writeFile()

```//会覆盖掉之前内容
const fs = require("fs")
fs.writeFile("./file/demo2.txt","荆轲刺秦王123",(err)=>{
    console.log(err)
    if(err) return console.log("写入文件失败！"+err.message)
    console.log('写入文件成功！')
})
```

### 文件追加

fs.appendFile()

```
const fs = require("fs");
fs.appendFile("./file/demo2.txt","\n纸巾",err=>{
    if(err) console.log('追加内容失败'+err.message)
    console.log('追加内容成功！')
})
```

### 文件复制

方法1（原理）：

```
fs.readFile("./file/demo2.txt","utf-8",(err,data)=>{
    if(err) console.log("读取文件失败！"+err.message)
    fs.writeFile("./file/dome-copy.txt",data,err=>{
        if(err) console.log('写入文件失败'+err.message)
        console.log('写入文件成功！')
    })
})
```

方法2（推荐）：

fs.copyFile()

```
fs.copyFile("./file/demo2.txt","./file/dome-copy2.txt",err=>{
    if(err) console.log('复制文件失败'+err.message)
        console.log('复制文件成功！')
})
```

### 获取当前文件路径

```
//导入文件模块
const fs = require("fs")
//倒入路径模块
const path = require('path');
//使用path.join()拼接地址（拼接地址可以是当前目录下任意文件）
//__dirname获取当前文件的目录
const newPath = path.join(__dirname,"file/demo2.txt")
//最后根据文件路径读取文件
fs.readFile(newPath,"utf-8",(err,data)=>{
    if(err) return console.log("读取失败！"+err.message)
    console.log(data)
})
```

补充：如果是直接访问当前文件可以：直接使用__filename

拓展：

```
2、读取文件另一种方式
const file = require("fs")
const path = require("path")
const txtpath = path.join(__dirname,"04函数扩展.js")
//读取文件
file.stat(txtpath,(err,data)=>{
    if(err) return console.log("读取文件失败"+message)
    console.log("文件读取成功！")
    console.log(data)
})
```

```
2、读取指定目录中所有文件的名称
const file = require("fs")
const path = require("path")
file.readdir(__dirname,(err,filename)=>{
    if(err) return console.log("读取文件名失败")
    console.log("读取文件名成功")
    console.log(filename)
})
```

### 返回路径中文件的文件名（不包括后缀）

```
//1、获取当前文件路径
const absPath = path.join(__filename)
2、获取.js文件的文件名
console.log(path.basename(absPath，'.js'))
```

### 返回文件扩展名

```
//1、获取当前文件路径
const absPath = path.join(__filename)
2、获取.js文件的扩展名
console.log(path.extname(absPath))//如果没有扩展名，返回为空
```



### 文件操作案例：

获取当前目录下所有文件的信息（文件名、大小、是否为文件），并保存到info.txt文件中

```
const file = require("fs")
const path = require("path")
//1、获取路径下所有文件名称
file.readdir(__dirname, (err, filenames) => {
    if (err) return console.log("读取文件名称失败！")
    let infostr = ''
    let countflag = 0
    //2、循环遍历，所有文件
    filenames.forEach(item=>{
        // (item)所有文件的文件名
        //3、拼接出每个文件的文件路径
        const absPath = path.join(__dirname,item)
        //4、读取所有文件信息
        file.stat(absPath,(err,txtinfo)=>{
            const strinfo = `
            文件名：${item}\n
            文件大小：${txtinfo.size}\n
            是否为文件${txtinfo.isFile()}\n---------------------------\n`
            infostr += strinfo //每次都累加，相当于原有基础上拼接
            //5、将所有文件信息写入，指定文件中
            file.writeFile(path.join(__dirname,"file/info.txt"),infostr,(err)=>{
                 if (err) return console.log("写入文件失败！")
                 console.log("写入文件信息成功")
            })
        })
    })
})
```

# Javascript

## Javascript 是单线程的一门语言

1. 什么是单线程：用户无法主动开启子线程，对于JS的运行来说，永远是主线程在执行关键代码；
2. 什么是多线程：用户可以主动开启子线程；    Thread  td = new Thread()
3. 在Node中，操作文件和网络都是比较耗时的操作；

## Node中为什么大量使用异步方法

1. 为什么要使用 异步方法呢： 因为 异步方法，不会阻塞CPU去执行其它任务；
2. 为什么在Node中不推荐使用同步呢： 因为 同步，需要一个一个执行，耗时的操作会阻碍CPU执行后续任务，因此，效率慢；

## CommonJS 模块规范和模块的使用

Node.js 实现了 CommonJS 模块化规范；

1. 什么是 CommonJS 规范？
   - CommonJS 是**为了实现 Javascript 的模块化**，而制定的一套规范；
2. 为什么 Javascript 需要模块化？
   - 浏览器中的Javascript有没有实现模块化？（在一个JS文件中，能不能引用另外JS文件中的方法）
   - 因为有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。
3. 如何实现 Javascript 的模块化？
   - 为了统一大家编写模块时候的规则，方便各模块之间的依赖和调用，于是 CommonJS 规范就应运而生了。
4. 那么，CommonJS 模块化规范，到底是个什么东西？？
   - 定义了什么是模块
   - 一个JS模块中，如何引入其它的JS模块
   - 一个JS模块中，如何向外暴露一些成员，供其它模块调用；
   - 如果没有类似于 CommonJS 的规范，行不行？
   - 只有大家遵守同样的规范，才能够协作开发，方便别人，同时也方便自己；

## 全局作用域和模块作用域

1. 每个JS文件，就是一个独立的模块，在这个JS文件中，所定义的任何方法、属性、变量、常量、对象，默认都属于 模块作用域，并不会属于 全局作用域；
2. 如果在某个模块内部，想为 全局的 global 作用域挂载一些属性，需要显示的调用`global.***`来挂载；

### global（全局作用域）

```
//定义1.js文件并写入代码
var b = 'this is txt2'
//将变量 b 设为 全局变量
global.b=b
```

### require（模块引用）

每一个实现了 CommonJS 规范的模块，必须定义一个 require() 函数，使用这个 require 函数，就能够 很方便的导入其它 模块中的成员，供自己使用；

```
require("./1.js")
//只有当模块文件中的变量设置到全局时才能调用，因为被视作闭包
console.log(a)
```

### exports（模块定义）

每一个模块中，如果想要把自己的一些私有成员，暴露给别人使用，那么，必须实现一个 exports 对象，这个对象，将来，如果你想把自己的成员，暴露给别人使用，只需要把自己的成员，挂载到 exports 上就行了

```
var a = '张三'
//暴露成员
exports.a = a
```

### module（模块标识）

这个 module 也是Common JS 规定的，它表示一个具体的模块，也是一个对象；

```
var a = 45
//暴露成员
module.exports.a = a
```

### module.exports 和 exports 的关系

```
//1.JS
var a = '123'
var b = '126'
module.exports = {a:12}
exports.b = b
```

引用：

```
const m1 = require("./m1.js")
console.log(m1)
// 都指向同一空对象，但是对外暴露的对象以module为准
```

所以，向外暴露成员时。推荐使用（module.exports）

# Node结构

## Node 中的 Javascript 由几部分组成

1. ECMAScript 核心
2. 全局成员
3. 模块系统成员
   - 模块系统成员，根据一些区别，又可以分为三大类： 核心模块、第三方模块、用户自定义模块

## 模块分类

### 核心模块

1. 什么是核心模块：由Node官方提供的好用的模块，叫做核心模块；只要大家在计算机中，安装了Node这个应用程序，那么，我们的计算机中就已经安装了所有的 核心模块；
2. 如何使用核心模块：`require('核心模块标识符')`

### 第三方模块

1. 什么是第三方模块：一些非官方提供的模块，叫做第三方模块；注意，第三方模块，并不在我们的计算机上，如果大家需要使用某些第三方模块，必须去一个叫做 `NPM` 的网站上搜索并下载才能使用；
2. 如何使用第三方模块：
   - 先从 npm 官网上下载指定的第三方模块
   - 使用 `require('第三方模块的名称标识符')`来导入这个模块
   - 根据 第三方模块的 官方文档，尝试使用

### 用户自定义模块

1. 什么是用户模块：程序员自己写的JS文件，就叫做 用户自定义模块；
2. 如何使用用户模块：`require('路径标识符')`

```
const app = require('./lib/index')
```

## 包

### 什么是包

1. 英文名叫做 `Packages`，包是在模块基础上更深一步的抽象，目的是：方便分发推广基于 CommonJS 规范实现的 应用程序 或 类库；
2. 包可以看作是 模块、代码 和 其它资源 组合起来形成的 独立作用域；

### 规范的包结构

1. **包都要以一个单独的目录而存在**；
2. **`package.json` 必须在包的顶层目录下**；
3. **`package.json` 文件必须符合 JSON 格式，并且必须包含如下三个属性：`name`, `version`, `main`**
   - name:  包的名字
   - version: 包的版本号
   - main: 表示包的入口文件
4. 二进制文件应该在**bin目录**下;
5. javaScript代码应该在**lib目录**下;
6. 文档应该在**doc目录**下;
7. 单元测试应该在**test目录**下;
8. Node.js对包要求并没有那么严格，只要顶层目录下有`package.json`，并**符合基本规范**即可;

```
{
    "name":"mycalc",
    "version":"1.0.0",
    "main":"./lib/index.js"
}
```

外界使用就必须先找到main： index.js文件（要引用包应该在包的同级目录下创建app.js文件）

```
const app = require('./lib/index') //引入自自定义模块
console.log(app)
```

### 描述文件 package.json

```
name：包的名称，必须是唯一
description：包的简要说明
version：符合语义化版本识别规范的版本字符串
keywords：关键字数据，通常用于搜索
maintainers：维护者数组，每个元素要包含name、email、web可选字段
contributors：贡献者数组，格式与maintainers相同。包的坐着应该是贡献者数据的第一个元素
bugs：提交bug的地址，可以是网址或者电子邮件地址
licenses：许可证数组，每个元素要包含type和url字段
repositories：仓库托管地址数组，每个元素要包含type、url和path字段
dependencies：包的依赖，一个关联数组，由包名称和版本号组成。
devDependencies：开发依赖项，表示一个包在开发期间用到的依赖项
```

## npm

### npm 的两层含义

1. NPM 是一个 第三方模块的托管网站，指的就是`https://www.npmjs.com/`；
2. NPM 是Node的包管理工具（全名叫做  Node package manager），在我们安装Node时候，就已经顺便也安装了 NPM 这个管理工具；

### 安装和卸载全局包

1. 什么是全局的包：通过  `npm install  包名  -g` 方式安装的包，都安装到了全局；一般全局的安装目录是`C:\Users\自己的用户文件夹\AppData\Roaming\npm`
2. **如果拿到一个空项目，必须先初始化一个`package.json`的配置文件，`npm init`或者`npm init -y`***
3. 运行`npm i 包名 --save`去安装指定的包，本地安装的包，都安装到了`node_modules`的目录下
4. 如果大家用的是npm 5.x的版本，可以不指定`--save`命令，如果用的是 npm 3.x 的版本，则需要手动指定 `--save`, 同时，`--save`有缩写形式，是：`-S`
5. `package-lock.json`文件中记录了曾经装过的包的下载地址，方便下次直接下载包；

### 其它常用命令

1. `--save-dev`它的缩写是`-D`
2. 注意：`dependencies`节点，表示项目上线部署时候需要的依赖项；`devDependencies`节点，表示项目在开发阶段需要的依赖项，但是**当项目要部署上线了**，`devDependencies`节点中的包**，就不再需要了！**
3. 注意：当使用`npm i`快速装包的时候，npm会检查`package.json`文件中，所有的依赖项，然后都为我们安装到项目中
4. `--production` 表示只安装 `dependencies` 节点下，记录的包，不安装`devDependencies`节点下的包；当项目要上线了，才会使用`--production`命令

### 解决 npm 下载慢问题

1. 默认，NPM在下载包的时候，连接的是国外的服务器，所以，有时候如果网速不是特别好，可能下载不下来包；此时，大家可以安装一个工具，叫做`nrm`，里面记录了好多下载NPM包的服务器地址，可以让我们方便的切换下载包时候请求的服务器；
2. 运行`npm i nrm -g`（注意：只要是工具，一般都是全局 -g 安装）
3. 当装完 nrm 之后，可以运行`nrm ls` 查看所有可用的服务器列表
4. 可使用`nrm use 服务器名称`来切换下载包时候的服务器地址

注意：还可以使用工具yarn来代替此工具，更快！

- npm i yarn -v//和nrm作用一样，下载更快
- yarn add '要安装的包'
- 或者 yarn install 安装全局

## 构建自己的web  Server的服务器

1. #### 导入提供的核心模块

   ```
   const http = require("http")
   ```

2. #### 创建服务器

   ```
   const server = http.createServer();
   ```

3. #### 为服务器绑定响应事件

   ```
   server.on("request",function(req,res){
       console.log("ok")
       res.end("服务器返回数据")
   })
   ```

4. #### 启动服务器

   ```
   //4、启动服务器
   //端口号，ip地址(不写默认监听127.0.0.1),回调函数
   server.listen(3000,function(){
       console.log("通知服务器已经启动！")
   })
   ```

## 理解 BS 交互模型

### 理解 BS 交互模型

B/S：表示  Browser / Server        C/S     Client / Server

1. 什么是服务器：在网络节点中，专门对外提供资源服务的一台电脑；
2. 什么是客户端：在网络节点中，专门用来消耗或呈现服务器中返回的数据的电脑；
3. 什么是静态资源：像 .js ,  .css, .jpg,  .html   ；所谓的静态资源，就是无需数据交互，服务器直接把资源读取，并响应给客户端就完事儿；
4. 什么是动态资源：当一些资源，服务器上并没有现成的，需要现在服务器端，做一层处理，最后把处理的结果返回给客户端，这样的资源，叫做动态资源；
5. HTTP 协议的通信模型：`请求 - 处理 - 响应`的过程；

### res和req对象（服务器所绑定的事件中使用）

- 返回请求数据

  ```
  res.end("服务器返回数据")
  ```

- 获取请求路径

  ```
  //拿到请求的url地址
  console.log(req.url)
  ```

- 获取请求方式

  ```
  //拿到请求类型那，toLowerCase转换成小写
  console.log(req.method)
  
  ```

### 防止中文乱码（一般放在res.end之前）

```
//参数1：数值类型状态码：200成功、300重定向404找不到，500aa类型错误
//参数2：配置对象
res.writeHeader(200,{
    'Content-Type':"text/html;charset=utf-8"
})//制定编码格式
res.end("请求类型："+req.method + "；请求地址：" +req.url)

```

### 案例：引入静态资源

```
const http = require("http")
const server = http.createServer()
const file = require("fs")
const path = require("path")
server.on("request", (req, res) => {
    const url = req.url
    getHtml(res, url)
})
server.listen(3000, function () {
    console.log("http://127.0.0.1:3000")
})
function getHtml(res, url) {
    // res.writeHead(200, {"Content-Type":"image/jpeg"});
    file.readFile(path.join(__dirname, url), 'utf-8', (err, data) => {
        if (err) return res.end('404，您访问的页面未找到，炸了！！')
        if (url === '/asset/image/hong.jpg') {
            res.writeHead(200, {"Content-Type":"image/jpeg"});//指定资源的编码格式
            res.end(data)
        } else {
            res.end(data)
        }
    })
}

```

## 结合模板引擎实现动态资源服务器

### 导入art -template第三方模块

```
const template = require("art-template")

```

### 设置页面渲染数据

```
//设置页面渲染数据
    const person = {
        name:'熊大大',
        age:21,
        hobby:['吃饭','睡觉','敲代码']
    }

```

### 生成模版字符串

```
//参数1为模版文件绝对路径
const htmlStr = template(path.join(__dirname,'asset/index.html'),person)
res.end(htmlStr)

```

### 页面渲染

```
<ul>
        <li>姓名：<%=name%></li>
        <li>年龄：<%=age%></li>
        <li>爱好：
            <ul>
                <li><%=hobby[0]%></li>
                <li><%=hobby[1]%></li>
                <li><%=hobby[2]%></li>
            </ul>
        </li>
    </ul>

```

完整案例：

```
const http = require("http")
const path = require("path")
//导入art -template第三方模块
const template = require("art-template")
const server = http.createServer()
server.on('request',(req,res)=>{
    //设置页面渲染数据
    const person = {
        name:'熊大大',
        age:21,
        hobby:['吃饭','睡觉','敲代码']
    }
    //参数1为模版文件绝对路径
    const htmlStr = template(path.join(__dirname,'asset/index.html'),person)
    res.end(htmlStr)
})
server.listen(3000,function(){
    console.log("http://127.0.0.1:3000")
})

```

## 使用 `nodemon` 工具来自动重启web服务器

- 这个工具的作用：能够实时监听 web 服务器中，代码的改变，只要代码被修改并保存了，则 nodemon 工具，会自动重新启动 web 服务器；
- 运行 `npm i nodemon -g` 就能够在全局环境中，安装这个工具了
- 当安装完毕 `nodemon` 之后，就可以 使用 `nodemon 要执行的js文件路径` 来运行JS文件了
- 今后在开发Web项目的时候，推荐使用 nodemon 来执行 web 服务器

## Node 中的 Web 快速开发框架 - Express

### 定义什么是Express：

1. 基于 Node.js 后端Javascript平台之上，开发出来的一套Web开发框架； 
2. Express中，基于 原生Node的特性，做了进一步的封装，提供了一些更加好用的方法，来提高Web开发的体验；
3. Express中，并没有覆盖或者删除原生的http模块方法；

### express 框架的安装和基本使用

1. 直接运行 `npm install express --save` 就可以安装Express框架了

2. 导入模块

   ```
   const express = require('express')
   
   ```

3. 创建服务器

   ```
   const app = express()
   
   ```

4. 事件监听

   ```
   app.get('/',function(req,res){
       //这里是原生方法的api
       // res.end('<h1>这是express中开启的服务器，查看是否会乱码（会）</h1>')
       //express独有的，可以直接防止中文乱码问题
       res.send('<h1>这是express中开启的服务器，查看是否乱码（会）</h1>')
   })
   
   ```

5. 启动服务器

   ```
   app.listen(4000,()=>{
       console.log('express server running at http://127.0.0.1:4000')
   })
   
   ```

## 服务器事件监听请求说明

- app.get只监听get请求,app.post。。。
- app.all表示监听所有类型请求

## express独有的，直接防止中文乱码问题

```
//这里是原生方法的api
// res.end('<h1>这是express中开启的服务器，查看是否会乱码（会）</h1>')
//express独有的，可以直接防止中文乱码问题
res.send('<h1>这是express中开启的服务器，查看是否乱码（会）</h1>')

```

## 使用 express 快速托管静态资源

1. 如果我们网站中，有很多静态资源需要被外界访问，express 框架，为我们提供了一个 内置的（中间件）  `express.static('静态资源目录')`  ， 来快速托管指定目录下的**所有静态资源文件；**
2. 用法： `app.use(express.static('public'));`

- 其中， `express.static` 是一个express的内置中间件；
- `app.use() `方法，是专门用来注册 中间件；

1. 当使用 第二步中的方法，把指定目录托管为静态资源目录之后，那么，这一层被托管的目录，不应该出现在 资源访问的 URL地址中；
2. 在一个Web项目中，我们可以多次调用`app.use(express.static())`
3. 在多次调用 express.static 的时候，如果文件名称有重复的，则以先注册的中间件为主！
4. 如果项目要部署了，推荐大家配置一个叫做`compression`的中间件，它能够开启服务器的GZip压缩功能；

### 1、先导入express框架

```
const express = require("express")

```

### 2、托管静态资源

```
//快速托管静态资源文件，静态文件所在目录作为参数传递即可
app.use(express.static('./view'));//asset下的页面文件都可访问了
app.use(express.static('./asset'));//asset下的静态资源文件都可访问了

```

注意：

1. 启动服务器后：默认自动启动view目录下的index.html文件
2. index.html文件中，填写资源引用路径时就不用再写/asset路径：

```
 <link rel="stylesheet" href="/css/index.css">
 <script src="/js/index.js"></script>

```

## compression压缩功能

- 帮助网页加载(项目部署阶段使用最佳)

### 安装（项目路径下）

```
npm i compression

```

### 导入compression

```
const compression = require('compression')

```

### 注册压缩资源中间件

```
//注册压缩资源中间键
server.use(compression())

```

## 虚拟目录 (推荐)

```
const express = require('express')
const app = express()
app.use(express.static('./view'))
//访问资源时可以设置虚拟目录
app.use('/asset',express.static('./asset'))
//这样子文件中就可以通过/static/css/xxx.css的方式访问public下面的内容了
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})

```

## 为 express 框架配置ejs模板引擎渲染动态页面

- 安装 ejs 模板引擎` npm i ejs -S`
- 使用 app.set() 配置默认的模板引擎 `app.set('view engine', 'ejs')`
- 使用 app.set() 配置默认模板页面的存放路径 `app.set('views', './views')`
- 使用 res.render() 来渲染模板页面`res.render('index.ejs', { 要渲染的数据对象 })`，注意，模板页面的 后缀名，可以省略不写！

### 注意res.render

`res.render('index.ejs', { 要渲染的数据对象 })`，模板页面的 后缀名（ejs），可以省略不写！

### 案例

```
const express = require('express')
const path = require('path')
const app = express()
// 配置模版引擎1步，（express更加适配）
// 使用 app.set() 配置默认的模板引擎
app.set('view engine','ejs')

// 配置模版引擎2步
// 配置默认模版存放路径
// 注意：默认情况下，无法直接使用，因为express并没有默认为我们提供默认模版引擎
// 所以再调用之前，先认为指定使用哪个模版引擎渲染页面
// 参数1：固定写法，参数2：模版页面存放路径
app.set('views','./view')

const person = 
    {
        name:'瑞东',
        age:'21',
        wife:'西田麻衣',
        hobby:['吃饭','旅游','嘿嘿嘿']
    }

app.get('/',(req,res)=>{
    //配置模版引擎3步
   // sendFile()只能渲染静态页面
    // //express独有的；参数1：要渲染的页面,参数2：要渲染的数据对象 
    // res.render();//渲染动态页面
    res.render('index.ejs',person)
})

app.listen(3100,()=>{
    console.log('http://127.0.0.1:3100')
})

```

## 使用 express 框架中提供的路由来分发请求

1. 什么叫做路由：前端请求的URL地址，都要对应一个后端的处理函数，那么 这种URL地址到 处理函数之间的对应关系，就叫做后端路由；
2. 在Express中，路由主要负责 分发请求处理的；

### 定义路由

- 创建03.roter.js'文件

```
//导入框架
const express= require("express")
//创建一个路由对象
const router = express.Router()
const personhu = {
    name:'胡歌',
    age:'21',
    wife:'刘亦菲',
    hobby:['吃饭','旅游','嘿嘿嘿']
}
//发起不同的路由请求
router.get('/',(req,res)=>{
    res.render('rotezhang.ejs',personhu)
})
router.get('/routhu',(req,res)=>{
    res.render('routhu.ejs',personhu)
})
router.get('/routliu',(req,res)=>{
    res.render('routliu.ejs',personhu)
})
//导出路由对象
module.exports = router;//暴露路由对象

```

### 使用自己的路由模块渲染页面

```
const express = require('express')
const app = express()
//托管静态资源
app.set('view engine','ejs')
app.set('views','./view')
// 导入自己的路由模块
const router = require('./03.roter.js')
//再将路由对象注册在app服务器中
app.use(router)
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})

```

## 中间件 在Express 框架里的概念

​	中间件是一个可访问请求对象（`req`）和响应对象（`res`）的函数，在 Express 应用的请求-响应循环里，下一个内联的中间件通常用变量 `next` 表示。中间件的功能包括：

1. 中间件是一个函数，路由处理函数
2. 有一个形参：next：是一个函数
3. 在中间件中可以调用这个函数
4. 中间件的表现：函数中的形参列表中只要有next函数就是中间件

```
function myMiddleWare(req,res,next){
}

```

### 作用：

- 表示每一个处理环节

- 这些处理环节之间只负责单独的处理

- 每当上一个中间件处理完以后，都交给下一个中间件继续处理

- 中间件之间共享的是req和res这两个对象

- 在中间件这个函数的参数列表中，有个next函数，这个next函数，只要一

  被调用，就会进入到下一个中间件的处理环节

### 案例：

- 日记记录需求：
- 每当有客户端来请求服务器，都要记录下这个请求的时间、
- url地址、以及请求的方式。
- 格式：2012-12-12  12:12:12  GET/api/postinfo

分析：

- 每次处理的函数中写入一个info.txt文件即可

```
//所以服务器启动之后：
//事件绑定get事件(可以把它封装起来)
app.get('/',(req,res)=>{
	//调用记录日志方法
    recordLog(req,res)
})

// 封装记录日志方法
function recordLog(req,res){
    const infoStr = `${new Date().toLocaleString()} ${req.method} ${req.url}\n`
    //fs.writeFile：会覆盖；使用fs.appendFile()追加
    file.appendFile(path.join(__dirname,'login/info.txt'),infoStr,err=>{
        if(err) return console.log('记录日志失败')
        console.log('记录日志成功')
    })
}  

```

通过中间件函数的方式实现上述功能：

- 创建一个中间件函数

  ```
  //定义一个写入日志的中间件
  function myMiddleWareWriteLogs(req,res,next){
      // 设置信息的字符串
      const infoStr = `${new Date().toLocaleString()} ${req.method} ${req.url}\n`
      file.appendFile(path.join(__dirname,'login/info.txt'),infoStr,err=>{
          if(err) return console.log('记录日志失败')
          console.log('记录日志成功')
  	    //当记录完毕后，自动进入下一个
  	    next();
      })
  }
  
  ```

- 引入这个中间件函数

  ```
  //引入中间件函数
  app.use(myMiddleWareWriteLogs)
  
  ```

  结论：这样不用每次请求都要调用记录日志方法，只要发起请求就会触发中间件函数

## 如何在路由中拿到post提交过来的表单数据？

- express并没有这种功能

### 关键思路：

- **每当req的data事件被促发时**，就表示有表单数据过来
- chunk:片、块是buffer二进制类型
- data有可能被促发多次，每次拿到一小块chunk就必须拼接一下

### 自定义模拟解析表单数据

先创建并启动服务器

再创建并引入中间件函数

```
const express = require('express')
const file = require('fs')
const path = require('path')
//创建服务器
const app = express()
//引入中间块函数
app.use(myMiddleWareWriteLogs)
//引入路由
const router = require('./06.router.js')
app.use(router)
//启动服务器
app.listen(3001,()=>{
    console.log("http://127.0.0.1:3001")
})
function myMiddleWareWriteLogs(req,res,next){
    const infoStr = `模拟表单解析时间:${new Date().toLocaleString()}； 请求方式：${req.method}； 请求地址：${req.url}\n`
    file.appendFile(path.join(__dirname,'login/info.txt'),infoStr,err=>{
        if(err) return console.log('记录日志失败!')
        console.log('记录日志成功!')
        next()//别忘了
    })
}
module.exports = myMiddleWareWriteLogs

```

引入并启动路由模块（每次请求交给路由模块处理）

```
const express = require('express')
//引入解析链接参数方法,查询字符串
const querystring = require('querystring');
const router = express.Router() //创建路由
router.get('/',(req,res)=>{
    res.send("<h1>这是首页</h1>")
})
router.get('/movie.html',(req,res)=>{
    res.send("<h1>这是电影页</h1>")
})
router.post('/about.html',(req,res)=>{
    // 每当req的data事件被促发时，就表示有表单数据过来
    // chunk:片、块是buffer二进制类型
    // data有可能被促发多次，每次拿到一小块chunk就必须拼接一下
    let dataStr='';
        req.on('data',(chunk)=>{
        dataStr+=chunk
    })
    req.on('end',()=>{
        // console.log(dataStr)
        //解析成对象,node提供了方法
        //参数1：必填，参数二：界定键值对符号，默认’&‘，参数三，默认’=’
        const result = querystring.parse(dataStr)
        console.log(result)
        res.send("<h1>这是使用post请求服务器数据</h1>"+JSON.stringify(result))
    })
})
module.exports = router


```

关键点：

- req的data事件

  每当req的data事件被促发时，就表示有表单数据过来

- 引入解析链接参数方法,查询字符串

  解析成对象

### 第三方中间件解析表单数据方法

- 运行 npm i body-parse -S 安装解析表单数据的
- 导入中间件：const bodyParser = require('body-parser')
- 注册中间件,解析普通键值对数据，false表示不使用扩展模块解析表单数据而使用node内置的querystring模块来解析表单数据：pp.use(bodyParser.urlencoded({extended:false}))

自己写的中间件：

```
const querystring = require('querystring')

function parseForm(req,res,next){
    let dataStr='';
    //当表单有数据提交时才触发此事件
    req.on('data',(chunk)=>{
        dataStr += chunk
    })
    //数据接收完毕
    req.on('end',()=>{
        //如何将result传递给下一个函数呢？
        const result = querystring.parse(dataStr)
        req.body = result
        next()//接入下一函数
    })
}
//以模块化的形式将parseForm方法暴露出去
module.exports = parseForm


调用方法：
// 导入记录自己解析表单日志的中间件
// const parseForm = require('./07parseFrom.js')
// //注册解析表单中间键
// app.use(parseForm)

```

第三方中间件（使用）

```
// 导入第三方中间块
const bodyParser = require('body-parser')
// 3、注册中间件,解析普通键值对数据，false表示不使用扩展模块解析表单数据
// 而使用node内置的querystring模块来解析表单数据
app.use(bodyParser.urlencoded({extended:false}))

```

### 路由一定要写在中间件之后

```
//引入路由,路由一定要要写在中间件之后
const router = require('./07.router.js')
app.use(router)

```

### 中间件的五种分类

1. 应用级：绑定挂载到app对象上的中间件（函数）
2. 路由级：绑定到Router上
3. 错误处理：(err,req,res,next)有四个形参的函数
4. 内置中间件：express.static是唯一的内置中间件
5. 第三方中间件：通过npm安装的中间件

## 模块加载机制

1. 只要使用require来加载指定模块必然会加载模块中代码
2. 只要加载过的代码，会默认缓存，下次执行会优先从缓存中加载，提高模块运行效率

### 核心模块加载机制

1. 先从缓存中查找，如果有，则直接使用
2. 如果缓存中没有，则根据路径标识符，加载本地用户模块并缓存起来，供下次使用

### 第三方模块加载机制

1. 先从缓存中查找，如果有，则直接使用
2. 如果缓存中没有，则根据第三方模块的路径标识符，加载第三方模块并缓存起来，供下次使用

### 在加载用户模块查找规则

1. 如果没有指定用户后缀名，严格按照指定名称进行查找
2. index -> index.js -> index.json(定义常量接收) -> index.node（报错：不是win32）

## 第三方模块(moment)  获取当前日期模块

- npm i moment，项目路径下安装
- 这个函数能不能叫一个包？是，有标准的包结构

## 模块查找规则：

- 1、根据包名称，直接在项目更目录中，去查找一个叫做“node_modules”的文件夹
- 2、如果有，则在该文件夹中，继续查找，一个叫做模块引用的文件夹
- 3、如果有，则在对应文件夹中查找'package.json'的文件
- 4、如果有该文件，则查找其中main属性并尝试加载main指定的文件作为入口、
- 5、能正常加载main指定文件则加载成功
- 6、如果在packge.json文件中没有main属性，则尝试依次加载根目录中的index.js,index.json,inde.node文件
- 7、如果在包的根目录中，根本没有packge.json文件，或者在“node_modules”中没有index相关文件,或者根本没有对应文件夹，或者在项目根目录中根本无node_modules则会向上一层去查找node_modules，查找规则同上
- 8、如果上一层目录中还是没有对应模块，则继续上找直到找到项目所在的磁盘根目录中还没找到就报错

# node中使用mysql数据库

1. 安装mysql模块: nom i mysql -S

2. 导入模块：const mysql = require('maysql')

   ```
   //导入数据库模块
   const mysql = require('mysql')
   
   ```

3. 创建连接对象

   ```
   // 创建数据库连接对象
   const conn = mysql.createConnection({
       host:'127.0.0.1',
       user:'root',
       password:'root',
       database:'myuser'
   })
   
   ```

4. 调用connect()连接上数据库的服务器

   ```
   //连接数据库，可不写
   conn.connect()
   
   ```

5. 调用conn.query()方法来执行指定的SQL语句

   ```
   //执行查询语句
   const sqlStr='select * from info'
   conn.query(sqlStr,(err,result)=>{
       console.log(err)
       console.log(result)
   })
   
   ```

   [art-template 官方文档](https://aui.github.io/art-template/zh-cn/docs/index.html

## CEUD操作：增删改查

```
const sqlStr="insert into info set ?"  //增
const sqlStr="delete from info  where id = 1"  //删
const sqlStr="update info set name='沈阳' where id = 0"  //改

```

在执行语句时，对于后接的参数，可以用问号代替

```
const sqlStr="insert into stu_info set ?"
将参数数据写在 query() 方法中
conn.query(sqlStr,数据对象,(err,result)=>{
    console.log(err)
    console.log(result)
})

```

注意：企业级项目开发，不建议使用delete删除数据，
可以通过添加isdel字段属性来标识数据是否删除（软删除）

```
例如：updated users set isdel = 1 where id = 2

```

# express中获取参数的几种形式

## 从URL地址中获取查询参数

```
app.get("/index.html",(req,res)=>{
    res.send('ok')
    console.log(req.query)
})
//浏览器输入
http://127.0.0.1:3000/index.html?id=1

```

## 从URL地址路径中获取

```
app.get("/userinfo/:id/:name",(req,res)=>{
    console.log(req.params)
})
//浏览器输入
http://127.0.0.1:3000/userinfo/1/熊刚

```

## 从post表单中获取提交的数据

```
//先引入第三方中间件
const bodyParse = require('body-parser')
app.use(bodyParse.urlencoded({extended:false}))
//无法请求
app.get("/index.html",(req,res)=>{
    console.log(req.query)
})
浏览器输入：http://127.0.0.1:3000/index.html?id=2&name=熊刚

```

# 企业两种开发模式

## 混合模式

- 前端只需要美化样式，写js特效

## 前后端分离

- 后端负责操作数据库，给前端暴露接口，渲染页面，前端就可以使用一些流行的框架：如vue,react,angluar

## 跨域问题

- 如果不考虑 表单的 Post 提交，则 可以使用 JSONP的形式来请求接口
- 但是，我们的项目中，涉及到了 英雄表单的 提交，表单提交一般都是Post
- 经过分析，由于JSONP，不支持Post，所以，我们的后端接口，无法设计成JSONP的接口；

## JSONP 和 CORS 的区别

1、JSONP的原理：动态创建script标签；

- JSONP发送的不是Ajax请求
- 不支持 Post 请求；

2.CORS中文意思是`跨域资源共享` , 本质，就是使用 XHR 对象，发送Ajax请求，来进行跨域的资源共享；

- CORS 发送的是真正的Ajax请求
- CORS 支持Ajax的跨域
- 如果要启用 CORS 跨域资源共享，关键在于 服务器端，只要 服务器支持CORS跨域资源共享，则 浏览器肯定能够正常访问 这种 CORS 接口；而且，客户端在 发送 Ajax的时候，就像发送普通AJax一样，没有任何代码上的变化；

3、对于Node来说，如果想要开启 CORS 跨域通信，只需要安装`cors`的模块即可；jax的时候，就像发送普通AJax一样，没有任何代码上的变化；

```
npm i cors -S
// 导入CORS模块
const cors = require('cors')
// 开启客户端跨域服务
app.use(cors())

```



## 英雄接口

### 准备工作

```
npm init -y初始化项目
npm i express -S
npm i mysql -S

```

1、server文件夹:服务器文件

- server.js服务器端入口文件

2、web文件夹：页面代码

- web.js页面入口文件

#### 安装

```
//views文件夹-》index.html安装模版引擎
npm i art-template -S
//安装bootstrap美化
npm i bootstrap@3 -S


```



### 知识点：

1. res.json();自动把对象转换为json字符串

2. e.preventDefault();阻止表单默认提交

3. location.href="/"   //跳转回首页

4. $("form").serialize()//表单中所有数据，并序列化一下

   ```
   $.ajax({
         url:"http://127.0.0.1:5000/api/addhero",
         data:$("form").serialize(),
         type:"post",
         dataType:"json",
         success:function(result){
            console.log(result);
         }
   })
   
   ```

   ​

### 思路：

- 1、创建一个最基本express服务器，作用：不提供web服务。
- 而是提供一个数据接口接口服务；
- 2、安装cors模块，从而启用跨域资源共享；
- 3、安装mysql模块来操作数据库；
- 4、根据api设计文档来创建对应接口，在接口api中，如果返回json
- 数据，使用res.json()
- 5、再设计更新英雄时安装body-parser中间件，来解析表单数据

### 如何拿到get提交过来数据

- const id = req.query.id

### 第三方模块也可以发送ajax

- axios专门发送ajax的
- 前后端都可以使用，
- 基于promis封装的  

安装，将资源托管到页面

```
//导入所有功能资源：jquery，axios等
app.use('/node_modules',express.static("../node_modules"))

```

再引用

```
<script src="/node_modules/jquery/dist/jquery.min.js"></script>
<script src="/node_modules/axios/dist/axios.min.js"></script>

```

发送ajax的时候可以使用：

```
 // $("form").serialize()//表单中所有数据，并序列化一下
                // name=李白&gender=男=》格式
                axios.post("http://127.0.0.1:5000/api/addhero",$("form").serialize())
                .then(function(result){
                if(result.status == 200 && result.data.err_code === 0) {
                    location.href="/";
                } else {
                    alert('添加失败！');
                }
                })

```

## 文章

- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
- [cors模块解决Node跨域资源共享问题](https://github.com/expressjs/cors)



# MVC

1. M:数据操作层(例如:model.js);
2. C:业务逻辑操作层（例如：router.js和controller;
3. V:views视图层，页面

## 作用：

- 能够保证每个模块只能单一，提高项目的维护和开发性；
- 注意：MVC是后端分层开发思想，所以，MVC是整个项目的角度，去分析统筹前端页面，
- 与后端业务逻辑，后端数据操作之间的关系；
- 注意：VUE，使用了MVVM的开发思想，只关注前端视图层，只是把每个前端页面
- 分成三层，分别是M 、 V 、 VM

```
M：保存页面单独数据 
V：每个页面的html结构
VM：调度者，分隔了M和V。每当V层想要获取后保存数据的时候，需要vm做中间处理

```




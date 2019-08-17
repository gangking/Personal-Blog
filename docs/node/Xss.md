# 前端防止xss

[参考1](https://www.cnblogs.com/meituantech/p/9718677.html)

## vue

### 1、引入XSS工具

1.在终端引入xss,命令：

```
npm install xss --save
```

 2.在vue的页面进行引入

```
import xss from 'xss'
```

3.定义一个变量进行测试

首先测试一个没有进行防止xss攻击的测试

```
<p v-html="test"></p>

export default {
  data () {
    return {
      test: `<a onclick='alert("xss攻击")'>链接</a>`
    }
}
```

结果，js事件直接被翻译了

 因此应该杜绝这些情况，解决方法如下

4、进行拦截

```
<p v-html="$xss(test)"></p>

import xss from 'xss'
export default {
  data () {
    return {
      test: `<a onclick='alert("xss攻击")'>链接</a>`
    }
}

Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})
```

此时a标签会保留，但是onclick事件被拦截了



### 2、直接不用v-html指令即可



## React

​	默认情况下，React DOM 在重新渲染页面时将所有进行转码，官方宣称在 React 应用中确保不会注入任何没显式编写的数据，所有的数据在页面渲染之前都会被转换成字符串，这防止 XSS 进攻。

​	著名的[Open Web Application Security Project](https://www.owasp.org/index.php/About_OWASP)项目就为我们提供了很多关于[防止XSS攻击](https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet)的建议，概括而言，我们需要在应用中做到如下几点:

- 所有的用户输入都需要经过HTML实体编码，这里React已经帮我们做了[很多](https://facebook.github.io/react/docs/introducing-jsx.html#jsx-prevents-injection-attacks)，它会在运行时动态创建DOM节点然后填入文本内容（你也可以强制设置HTML内容，不过这样比较危险）
- 当你打算序列化某些状态并且传给客户端的时候，你同样需要进行HTML实体编码

### [Serialize JavaScript](https://github.com/yahoo/serialize-javascript)

​	Yahoo的工程师已经提供了一个[Serialize JavaScript](https://github.com/yahoo/serialize-javascript)模块帮我们轻松地进行JSON转码与过滤，我们可以直接使用`npm install --save serialize-javascript`导入该模块，然后使用`serialize`方法替代内置的`JSON.stringify`方法: 
# 综合题库

## [什么是前端工程化、模块化、组件化](https://www.cnblogs.com/allenlei/p/6195235.html)

```
1、前端工程化
	将前端项目当成一项系统工程进行分析、组织和构建从而达到项目结构清晰、分工明确、团队配合默契、开发效率提高的目的。
	在只有若干个页面的小型项目我们只需要用这些简单的做法就能把项目很好的组织起来，但是在一个大型web项目中往往有更加复杂的结构和非常多的页面需要很多人甚至是多个团队配合才能把项目做完，我们需要有更加严谨和复杂的工程化思维去组织结构。从更高层面的项目组织来看我们要做项目的各种规范、技术选型、项目构建优化等等，在代码层面我们还需要用到JS/CSS模块机、UI组件化等开发方式。
	前端工程化就是用做工程的思维看待和开发自己的项目，而不再是直接撸起袖子一个页面一个页面开写
2、前端模块化
	在组织代码的时候会用到模块化和组件化，可以理解到，前端工程化是一个高层次的思想，而模块化和组件化是为工程化思想下相对较具体的开发方式，因此可以简单的认为模块化和组件化是工程化的表现形式。
	那具体什么是模块化呢，还是举简单的例子,我们要写一个实现A功能的JS代码，这个功能在项目其他位置也需要用到，那么我们就可以把这个功能看成一个模块采用一定的方式进行模块化编写，既能实现复用还可以分而治之，
	同理在写样式的时候，如果我们需要某种特殊的样式，会在很多地方应用，那么我们也可以采用一定的方式进行CSS的模块化，具体说来，JS模块化方案很多有AMD/CommonJS/UMD/ES6 Module等，CSS模块化开发大多是在less、sass、stylus等预处理器的import/mixin特性支持下实现的。
3、前端组件化
	组件化也是工程化的表现形式。
    - 页面上的每个独立的、可视/可交互区域视为一个组件；
    - 每个组件对应一个工程目录，组件所需的各种资源都在这个目录下就近维护；
    - 由于组件具有独立性，因此组件与组件之间可以 自由组合；
    - 页面只不过是组件的容器，负责组合组件形成功能完整的界面；
    - 当不需要某个组件，或者想要替换组件时，可以整个目录删除/替换。
	组件化将页面视为一个容器，页面上各个独立部分例如：头部、导航、焦点图、侧边栏、底部等视为独立组件，不同的页面根据内容的需要，去盛放相关组件即可组成完整的页面。
	
PS：模块化和组件化一个最直接的好处就是复用，同时我们也应该有一个理念，模块化和组件化除了复用之外还有就是分治，我们能够在不影响其他代码的情况下按需修改某一独立的模块或是组件，因此很多地方我们及时没有很强烈的复用需要也可以根据分治需求进行模块化或组件化开发。我去1·
```



## VUE原理

### mvm和mvc区别？

```
MVC：
Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。
　　　　通常模型对象负责在数据库中存取数据。
View（视图）：是应用程序中处理数据显示的部分。
　　　　通常视图是依据模型数据创建的。
Controller（控制器）：是应用程序中处理用户交互的部分。
　　　　通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。
　　　　
MVVM:
Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。
　　　　通常模型对象负责在数据库中存取数据。
View（视图）：是应用程序中处理数据显示的部分。
　　　　通常视图是依据模型数据创建的。
ViewModel（视图模型）：mvvm模式的核心，它是连接view和model的桥梁。
它有两个方向：
	一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。
	二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。
	这两个方向都实现的，我们称之为数据的双向绑定。
	总结：在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。
```



### vue组件传值几种方法？

五种：

```
一、通过路由带参数进行传值
①两个组件 A和B,A组件通过query把orderId传递给B组件（触发事件可以是点击事件、钩子函数等）
this.$router.push({ path: '/conponentsB', query: { orderId: 123 } }) // 跳转到B

②在B组件中获取A组件传递过来的参数
this.$route.query.orderId

二、通过设置 Session Storage缓存的形式进行传递

三、父子组件之间的传值

四、不同组件之间传值，通过eventBus（小项目少页面用eventBus，大项目多页面使用 vuex）
①定义一个新的vue实例专门用于传递数据，并导出
eventBus.js
import Vue from 'vue';
export default new Vue();

②创建了一个新的vue实例。接下来我们在click组件和show组件中import它。
import Bus from 'common/js/bus.js';  
接下来，点击事件或钩子函数触发eventBus.emit事件
methods: {  
   addCart(event) {  
   Bus.$emit('getTarget', event.target);   
   }  
}  

③通过调用bus监听这个事件，接收传递过来的数据：

created() {  
        Bus.$on('getTarget', target => {  
            console.log(target);  
        });  
}  

五、vuex进行传值
```



### vue路由原理？

​	前端路由，顾名思义就是一个**前端不同页面的状态管理器**,可以不向后台发送请求而直接通过前端技术实现多个页面的效果。angularjs中的`ui-router`,vue中的`vue-router`,以及react的`react-router`均是对这种功能的具体实现。 

既然`前端路由`这么牛逼，那必须的好好研究一下。 

​	常见的路由插件中两种方式都是支持且可以切换的，例如`angularjs1.x`中就可以通过以下代码从**Hash**模式切换到**H5**模式： $locationProvider.html5Mode(true); 切换到**HTML5**的路由模式，主要用于避免url地址中包含**#**而引发的问题。 

```
1.HashChange
1.1 原理
	HTML页面中通过锚点定位原理可进行无刷新跳转，触发后url地址中会多出# + 'XXX'的部分，同时在全局的window对象上触发hashChange事件，这样在页面锚点哈希改变为某个预设值的时候，通过代码触发对应的页面DOM改变，就可以实现基本的路由了,基于锚点哈希的路由比较直观，也是一般前端路由插件中最常用的方式。
1.2 应用
例如：
<ul>
  <li><a href="#angular">angular</a></li>
  <li><a href="#vue">vue</a></li>
  <li><a href="#rect">rect</a></li>
</ul>

window.onhashchange = function (opt) {
  console.log('hash', location.hash)
}

2.HTML5 HistoryAPI
2.1 原理
	HTML5的History API为浏览器的全局history对象增加的扩展方法。一般用来解决ajax请求无法通过回退按钮回到请求前状态的问题。
	HTML4中，已经支持window.history对象来控制页面历史记录跳转，常用的方法包括：
	- history.forward(); //在历史记录中前进一步
	- history.back(); //在历史记录中后退一步
	- history.go(n): //在历史记录中跳转n步骤，n=0为刷新本页,n=-1为后退一页。

	在HTML5中，window.history对象得到了扩展，新增的API包括：
	- history.pushState(data[,title][,url]);//向历史记录中追加一条记录
	- history.replaceState(data[,title][,url]);//替换当前页在历史记录中的信息。
	- history.state;//是一个属性，可以得到当前页的state信息。
	- window.onpopstate;//是一个事件，在点击浏览器后退按钮或js调用forward()、back()、go()时触发。监听函数中可传入一个event对象，event.state即为通过pushState()或replaceState()方法传入的data参数。
2.2 应用
	浏览器访问一个页面时，当前地址的状态信息会被压入历史栈,当调用history.pushState()方法向历史栈中压入一个新的state后，历史栈顶部的指针是指向新的state的。可以将其作用简单理解为 假装已经修改了url地址并进行了跳转 ,除非用户点击了浏览器的前进,回退,或是显式调用HTML4中的操作历史栈的方法，否则不会触发全局的popstate事件。
```

### Vue router 实现

[vue-router 实现 -- install](https://github.com/muwoo/blogs/issues/23)

[vue-router 实现 -- new VueRouter(options)](https://github.com/muwoo/blogs/issues/24)

[vue-router 实现 -- HashHistory](https://github.com/muwoo/blogs/issues/25)

[vue-router 实现 -- HTML5History](https://github.com/muwoo/blogs/issues/26)

[vue-router 实现 -- 路由变更监听](https://github.com/muwoo/blogs/issues/27)





## get和post请求区别？

​	GET 用于获取信息，是无副作用的，是幂等的，且可缓存 POST 用于修改服务器上的数据，有副作用，非幂等，不可缓存 

```
GET请求在URL中传送的参数是有长度限制的，而POST没有。

GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。

GET参数通过URL传递，POST放在Request body中。

GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

GET请求只能进行url编码，而POST支持多种编码方式。

GET请求会被浏览器主动cache，而POST不会，除非手动设置。

GET产生的URL地址可以被Bookmark，而POST不可以。

GET在浏览器回退时是无害的，而POST会再次提交请求。
```



## web性能优化

```
1. 压缩源码和图片(js采用混淆压缩，css进行普通压缩，jpg图片根据具体质量压缩为50%到70%，png用来源软件压缩24色变成8色，去掉一些png格式信息等) 
2. 选择合适的图片格式(颜色数多用jpg，颜色少用png，如果能通过服务器端判断浏览器支持WebP就用WebP或SVG格式) 
3. 合并静态资源(减少HTTP请求) 
4. 把多个css合并为一个css，把图片组合成雪碧图
5. 开启服务端的Gzip压缩(对文本资源非常有效，对图片也没那么大压缩率) 
6. 合并静态资源(减少HTTP请求) 
7. 使用CDN(对公开库，能和其他网站共享缓存)
8. 延长静态资源缓存时间  
9. 把css放页面头部，js放底部(这样不会阻塞页面渲染，让页面出现长时间的空白) 
10. 对于较大的文本资源，必须开启gzip压缩
```


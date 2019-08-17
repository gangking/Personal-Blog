# Vue题库

## 参考网址

[81道vue经典面试题](https://segmentfault.com/a/1190000016351284)

## VueX是什么？怎么使用？哪种场景下使用？

​	为vue构建的状态集管理工具，组件间进行通信，兄弟组件可以用eventBus,适合大型项目中使用

VueX是什么？

1. 专门为vue构建的状态集管理

2. 解决组件间状态共享问题

3. 强调的是集中式管理

4. 说白了 主要是便于维护 便于解耦 所以不是所有的项目s适用vuex

   ```
   解耦，字面意思就是解除耦合关系。
   耦合是指两个或两个以上的体系或两种运动形式间通过相互作用而彼此影响以至联合起来的现象。比如对象之间
   ```

5. 如果不是构建大型项目使用vuex 反而使项目代码繁琐多余

怎么使用？

```
state    存放数据
mutation 更新状态
getters  相当于计算属性
actions  将数据传给mutation
modules  拆分仓库

var staore = new Vuex.staore({
    state:{
        count:0
    },
    mutation:{
        addState:fuction(state){
        	state.count++;
        	// 使用： store.commit('addState')
        },
        reduceState:fuction(state){
        	state.count--;
        }
    }
})
```

哪种场景下使用？

创建组件，弹窗表单组件，数据可以通过vuex去管理。



## 四个vue中指令和方法

1. v-if 条件渲染指令 代表存在销毁
2. v-bind 绑定指令 用来绑定属性 简写：
3. v-on 坚持事件指令 简写@
4. v-for 循环指令



## 导航钩子有哪些？有哪些参数？

导航钩子有哪些？

实现一个路由守卫功能。

1. 翻译过来就是关于路由生命周期函数

2. 分为全局式和局部式两种：

   ```
   beforeEach:在路由切换开始调用
   afterEach:在路由切换离开时调用
   局部到单个路由
   beforeEnter
   组件钩子函数
   beforeRouterEnter,
   beforeRouterUpdate,
   beforeRouterLeave
   
   怎么使用？
   const router = new VueRoute({
       routes:routes
   })
   
   const routes = [
       {
           path:'/',
           name:'/',
           component:Home,
           meta: {
               auth:true
           }
       }
   ]
   
   针对全局：
   router.beforeEnter((to,form.next)=>{
       if (to.meta.auth) {
           if () {
               next()
           } else {
               next({
                   path:'/login/'
               })
           }
       }
   })
   局部的
   {
      path:'/',
      name:'/',
      component:Home,
      beforeEnter:function(){
          
      }
   }
   单个组件
   直接和created()同级使用即可，
   
   to：即将进入目标对象
   from：当前导航要离开的导航对象
   next: 一个函数，调resolve执行下一步
   ```



## v-model是什么？标签怎么绑定事件？

v-model是什么？

1. vue中利用v-model来进行表单数据的双向绑定

2. 说白了就是做了两个操作：

   v-bind 绑定一个value属性

   利用v-on 把当前元素绑定到一个事件上



## 什么是vue?

1. 由饿了么ued团队维护的一个渐进式js框架

2. 是mvvm框架

3. 如何使用vue去构建项目

   ```
   vue-cli脚手架工具构建项目
   直接引入vue.js进行项目的构建
   ```

4. Vue生命周期详解

   ```
   分为四个阶段：
   组件创建时 created
   模板渲染时 beforeMount(dom操作) mounted
   组件更新时 uptated
   组件卸载时 destroy
   
   
   ```



## vue组件封装过程以及如何封装？

为什要封装组件？主要目的：为了解耦

通用组件必须具备高性能 高耦合 （往往我们还会在通用组件留一个插槽）



## axios是什么？怎么使用？

axios是什么？

1. 是基于promise的用于浏览器和node.js的http的客户端
2. 主要作用是向后台发送请求
3. 支持promise
4. 提供一些并发方法
5. 提供拦截器
6. 浏览器防止csrf(跨站请求伪造)

axios fetch ajax区别？

1. 前两者基于promise 后者主要还是利用callback形式
2. fetch 脱离 xhr 新语法 默认不传cookie 另外不想xhr 可以监听到请求进度。



## swiper后台获取数据？css也没问题？但是图片不动怎么解决？



## vue路由懒加载

​	延时加载，当你需要时加载，vue打包后都是引用一个js，所以需要懒加载，相对于大型项目而言。

1. 会拆分js，这样根据不同功能加载js，节约时间

如何使用？

就是异步组件

```
{
    path:'/detail',
    name:'detail',
    component:detail
}


<router-link to='/detail'></router-link>

function resolveView(view){
    return ()=>import('@/components/${view}.vue')
}

{
    path:'/detail',
    name:'detail',
    component:resolveView(detail)
}
```



## vue-loader

1. 就是一个加载器，能把。vue组件转换成js模块

2. 为什么要求去转义

   ```
   - 动态渲染一些数据
   - 对三个标签都做了优化 script 中直接使用es6 也默认可以使用sass
   - 并且还提供了作用域
   - 开发阶段提供热加载
   
   预加载需要强大服务器支持，提升用户体验 但是服务器有压力
   ```



## 用过插槽吗？具名还是匿名？

- 是一个非常好的东西，slot 说白了就是一个占位的

- 包含三种 ：默认插槽（匿名）、具名插槽、作用域插槽

区别：

1. 匿名插槽 就是没有名字，只要默认都填到这里
2. 具名插槽 就是有名字的
3. 匿名只能添加一个，具名可以添加多个
4. 作用域插槽只作用当前slot



例子：

```
创建about.vue
<div>
	<h2>关于插槽</h2>
	<slot name="head" say="holle"></slot>
	<slot></slot>
	<slot name="footer"></slot>
</div>


引入组件about.vue
这样就可以用了，不加也没事，反正占位的
<about>
    <div slot="head" slot-scoped="aaa">
	  {{aaa}}这是头部
	</div>
	<h2>这是hollo word</h2>
	<div slot="footer">
	这是底部
	</div>
</about>

这样可以大大丰富通用组件
```



## vue虚拟DOM理解

什么是虚拟DOM？

1. 就是一段字符串，就是一个变量，真实DOM是DOM树，即以js的方式去添加DOM元素

2. 本质上优化Diff算法

   ```
   新旧DOM对比 获取差异dom 一次性更新到真实DOM上
   ```

3. 也有自己的缺陷：

   ```
   - 更适合批量修改dom
   - 尽量不要跨层级修改dom
   - 设置key，可以最大的利用节点，没有key，直接创建新的节点
   ```

4. 比真实DOM渲染速度快（不一定，只占90%）



## 如何理解vue的mvvm模式

mvvm和mvc区别？

1. mvvm是mvc衍生

   ```
   mvc 指的是 model view controller,
   controller和model之间不能相互传，只能c传m
   
   缺点：不及时
   ```

2. mvvm 也分为三层 view viewModel  model

   ```
   view和model之间没有任何联系 都是通过vm联系的
   ```

3. vue是专注于view和viewModel的框架 ，双向绑定思想



## keep-alive作用

用来读取缓存的

1. 说白了 能让不活动的组件活着

2. 两种属性:include 与 exclude 允许组件有条件的缓存

   ```
   实现原理：
   - 其实就是在 created时候 将需要缓存的vnode节点放在cache（keqi）中 在render的时候 根据 name 再进行取出。
   - 怎么使用？
   根据路由使用
   {
       path:'/detail',
       name:'detail',
       component:detail，
       meta:{
           keepAlive:true// 允许缓存
       }
   }
   
   来判断是否缓存
   <keep-alive>
   	<router-view v-if="$route.meta.keepAlive"/>
   </keep-alive>
   ```

   

## axios拦截器

```
// http request 请求拦截器
axios.interceptors.request.use(config => {
	// 在发送请求之前做些什么
	let pathname = location.pathname;
	if(localStorage.getItem('token')){
		if(pathname != '/' &&  pathname != '/login'){
			config.headers.common['token'] = localStorage.getItem('token');
		}
	}
	return config;
}, error => {
	// 对请求错误做些什么
	return Promise.reject(error);
});
```


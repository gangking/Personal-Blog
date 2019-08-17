# 移动端适配

## rem

当使用 rem 单位，他们转化为像素大小取决于页根元素的字体大小，即 html 元素的字体大小。 根元素字体大小乘以你 rem 值。[·](http://caibaojian.com/rem-vs-em.html)

例如，根元素的字体大小 16px，10rem 将等同于 160px，即 10 x 16 = 160。

模板（1:100）：

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<meta name="description" content="不超过150个字符"/>
<meta name="keywords" content=""/>
<meta content="caibaojian" name="author"/>
<title>前端开发博客</title>
<link rel="stylesheet" href="base.css">
<script type="text/javascript">
//引入该flexible.min.js
!function(e,t){function n(){var n=l.getBoundingClientRect().width;t=t||540,n>t&&(n=t);var i=100*n/e;r.innerHTML="html{font-size:"+i+"px;}"}var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");if(l.firstElementChild)l.firstElementChild.appendChild(r);else{var a=d.createElement("div");a.appendChild(r),d.write(a.innerHTML),a=null}n(),o.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),o.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}(750,750);
</script>
</head>

<body>
    <!-- 正文 -->
</body>
</html>

100px = 1rem
```

 

## em 

当使用em单位时，像素值将是em值乘以使用em单位的元素的字体大小。[·](http://caibaojian.com/rem-vs-em.html)

例如，如果一个 div 有 18px 字体大小，10em 将等同于 180px，即 10 × 18 = 180。



## rem和em主要区别

- Em 和 rem 单位之间的区别是浏览器根据谁来转化成px值 理解这种差异是决定何时使用哪个单元的关键。[·](http://caibaojian.com/rem-vs-em.html)

-  rem 单位翻译为像素值是由 html 元素的字体大小决定的。 此字体大小会被浏览器中字体大小的设置影响，除非显式重写一个具体单位。

- em 单位转为像素值，取决于他们使用的字体大小。 此字体大小受从父元素继承过来的字体大小，除非显式重写与一个具体单位。

 

## [媒体查询](https://www.cnblogs.com/lguow/p/9316598.html)


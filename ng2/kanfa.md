### mvc mvvm 简单讲法

+ 简单来说MVC 就是 模型 视图  控制器；MVVM 就是 模型 视图 视图模型，MVVM主要就是为了解决mvc的controller的负担。

+ 通俗点
    - mvc: m:数据在这儿拿走吧，c:行嘞，那个v，你显示一下,v:哦。

    - mvvm: m:数据在这儿拿走吧,vm:行嘞，那个v，你显示一下,vm:哦。。。用户点了我一下，我也点你一下,vm:卧槽你点我，我这儿数据更新了，我也更新你一下,v:用户戳我了，我也戳你,vm:哎呦你戳我，m踹我，我也踹你。。。。

### 组件是啥？

+ 组件是啥，在页面中有一个dom节点（或称元素），该dom对应了一个数据结构，对应数据结构的变化会使dom呈现不同的形态，并且页面重复引用该组件不会导致副作用，对全局该dom开放了部分接口，但是组件内部的变量不会导致全局变量污染。 
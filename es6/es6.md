##  ES6入门

####    ES6用法  
  
```
    <!-- 加载Traceur编译器 -->
    <script src="http://google.github.io/traceur-compiler/bin/traceur.js"
        type="text/javascript"></script>
    <!-- 将Traceur编译器用于网页 -->
    <script src="http://google.github.io/traceur-compiler/src/bootstrap.js"
            type="text/javascript"></script>
    <!-- 打开实验选项，否则有些特性可能编译不成功 -->
    <script>
            traceur.options.experimental = true;
    </script>
    
    <script type="module">
    class Calc {
        constructor(){
        console.log('Calc constructor');
        }
        add(a, b){
        return a + b;
        }
    }
    
    var c = new Calc();
    console.log(c.add(4,5));
    </script>
```

+ 注意，script标签的type属性的值是module(或者traceur)，而不是text/javascript。这是Traceur编译器识别ES6代码的标识，编译器会自动将所有type=module的代码编译为ES5，然后再交给浏览器执行。    
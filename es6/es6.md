##  ES6入门
+ [ES6环境支持](#ES6环境支持)
+ [ES6中是否包含字符串三种新方法](#ES6中是否包含字符串三种新方法)
+ [ES6 repeat()原字符串重复](#ES6原字符串重复)



#####    ES6环境支持 
  
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

注意，script标签的type属性的值是module(或者traceur)，而不是text/javascript。这是Traceur编译器识别ES6代码的标识，编译器会自动将所有type=module的代码编译为ES5，然后再交给浏览器执行。    

---

#####    ES6中是否包含字符串三种新方法
  传统上，JavaScript只有 indexOf 方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。  
      
+ includes()：返回布尔值，表示是否找到了参数字符串。
+ startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
+ endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。  
  
```
    var str = "Hello world!";
 
    str.startsWith("Hello") // true
    str.endsWith("!") // true
    str.includes("o") // true
```

这三个方法都支持第二个参数，表示开始搜索的位置。
```
    var str = "Hello world!";
    
    str.startsWith("world", 6) // true
    str.endsWith("Hello", 5) // true
    str.includes("Hello", 6) // false    
```

---

#####    ES6原字符串重复    
repeat()返回一个新字符串，表示将原字符串重复n次
```
    var str = "x";
    str.repeat(3) // "xxx"
    
    var str1 = "hello";
    str1.repeat(2) // "hellohello"
```

---


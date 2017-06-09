##  ES6入门
+ [ES6 环境支持](#环境支持)
+ [ES6 中是否包含字符串三种新方法](#是否包含字符串三种新方法)
+ [ES6 repeat()原字符串重复](#原字符串重复)
+ [ES6 模板字符串](#模板字符串)
+ [ES6 检测Number值](#检测值)
+ [ES6 新增Math方法](#新增方法)
###    环境支持 
  
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

&emsp;&emsp;注意，script标签的type属性的值是module(或者traceur)，而不是text/javascript。这是Traceur编译器识别ES6代码的标识，编译器会自动将所有type=module的代码编译为ES5，然后再交给浏览器执行。    

---

###    是否包含字符串三种新方法
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

&emsp;&emsp;这三个方法都支持第二个参数，表示开始搜索的位置。
```
    var str = "Hello world!";
    
    str.startsWith("world", 6) // true
    str.endsWith("Hello", 5) // true
    str.includes("Hello", 6) // false    
```

---

###    原字符串重复    
&emsp;&emsp;repeat()返回一个新字符串，表示将原字符串重复n次
```
    var str = "x";
    str.repeat(3) // "xxx"
    
    var str1 = "hello";
    str1.repeat(2) // "hellohello"
```

---

###    模板字符串
模板字符中，支持字符串插值：

```
    let first = `邪`;
    let last = `七`;
    console.log(`Hello ${first}${last}!`);
    // Hello 邪七!
```

模板字符串可以包含多行：

```
    let test = `
        在
        下
        邪
        七
    `
    console.log(test) // 在 下 邪 七
    console.log(`${test}`) //  在 下 邪 七
```

---

###    检测值
Number.isFinite()用来检测是否非无穷。

```
    Number.isFinite(15); // true
    Number.isFinite(0.8); // true
    Number.isFinite(NaN); // false
    Number.isFinite(Infinity); // false
    Number.isFinite(-Infinity); // false
    Number.isFinite("foo"); // false
    Number.isFinite("15"); // false
    Number.isFinite(true); // false
```

Number.isNaN()用来检测是否NaN。

```
    Number.isNaN(NaN); // true
    Number.isNaN(15); // false
    Number.isNaN("15"); // false
    Number.isNaN(true); // false
```

Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

```
    Number.isInteger(25) // true
    Number.isInteger(25.0) // true
    Number.isInteger(25.1) // false
    Number.isInteger("15") // false
    Number.isInteger(true) // false
```

---

###    新增方法
##### Math对象新增的方法，都是静态方法，只能在Math对象上调用。

**Math.trunc()**：去除一个数的小数部分，返回整数部分。

```
    Math.trunc(4.9)  // 4
    Math.trunc(-4.1) // -4
    Math.trunc()     // NaA
```

**Math.sign()**：判断一个数到底是正数、负数、还是零。

返回五种值：参数为正数，返回+1；参数为负数，返回-1；参数为0，返回0；参数为-0，返回-0;其他值，返回NaN。


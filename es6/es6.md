##  ES6入门

### 列表
+ [ES6 环境支持](#环境支持)
+ [ES6 中是否包含字符串三种新方法](#是否包含字符串三种新方法)
+ [ES6 repeat()原字符串重复](#原字符串重复)
+ [ES6 模板字符串](#模板字符串)
+ [ES6 检测Number值](#检测值)
+ [ES6 新增Math方法](#新增方法)
+ [ES6 新增数组遍历方法](#数组遍历)
+ [ES6 简洁语法表示法](#简洁语法)
+ [ES6 Object.is()和Object.assign()](#两个对象内置方法)
+ [ES6 函数](#函数)
+ [ES6 Set](#set)
+ [ES6 Class类](#类)

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
**Number.isFinite()**：用来检测是否非无穷。

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

**Number.isNaN()**：用来检测是否NaN。

```
    Number.isNaN(NaN); // true
    Number.isNaN(15); // false
    Number.isNaN("15"); // false
    Number.isNaN(true); // false
```

**Number.isInteger()**：用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

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

```
    Math.sign(-5) // -1
    Math.sign(5)  // +1
    Math.sign(0)  // 0
    Math.sign(-0) // -0
    Math.sign('hubwiz'); // NaN
```

**Math.cbrt()**：计算一个数的立方根。

```
    Math.cbrt(-1); // -1
    Math.cbrt(0);  // 0
    Math.cbrt(2);  // 1.2599210498948732
```

**Math.fround()**：返回一个数的单精度浮点数形式。

```
    Math.fround(0);     // 0
    Math.fround(1.337); // 1.3370000123977661
    Math.fround(NaN);   // NaN
```

**Math.hypot()**：返回所有参数的平方和的平方根。如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回NaN。

```
    Math.hypot(3, 4);        // 5
    Math.hypot(3, 4, 5);     // 7.0710678118654755
    Math.hypot();            // 0
    Math.hypot(NaN);         // NaN
    Math.hypot(3, 4, 'foo'); // NaN
    Math.hypot(3, 4, '5');   // 7.0710678118654755
    Math.hypot(-3);          // 3
```

更多请访问：[es6Math对象新增的方法](http://www.cnblogs.com/detanx/p/ES6Math.html)

---

###    数组遍历
ES6提供三个新的方法：

+ keys()
+ values()
+ entries()

仅用于遍历数组。它们都返回一个遍历器，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

```
    let a = ['张三','李四'];

    for (let k of a.keys() ) {
      console.log(k)  // 返回索引 0 , 1
    }

    for (let k of a.values() ) {
      console.log(k)  // 返回值 张三, 李四
    }

    for (let k of a.entries() ) {
      console.log(k)  // 返回键值  [0,'张三'] [1,'李四']
    }
```

---

###    简洁语法
ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```
    function f( x, y ){
        return { x, y }
    }
    f(1,2) // { x : 1 , y : 2 }

    // 等同于
    function f( x, y ){
        return { x ：x, y : y }
    }
    f(1,2) // { x : 1 , y : 2 }
```

示例：

```
    var Person = {
            name: '邪七',
            birth:'2000-01-01',
            // 等同于hello: function ()...
            hello() { document.write('我的名字是', this.name); }
          };
    Person.hello();
```

这种写法用于函数的返回值，将会非常方便。

```
    function getPoint() {
        let x = 1;
        let y = 10;
        return {x, y};
    }
    getPoint()   // {x:1, y:10}
```
**属性名表达式**
javaScript语言定义对象的属性，有两种方法。
```
    let obj = {};
    // 方法一
    obj.foo = true;
    // 方法二
    obj['a'+'bc'] = 123;
    console.log(obj)
    
    //    obj {
    //        foo: true,
    //        abc: 123
    //    };
        
```
上面代码的方法一是直接用标识符作为属性名，方法二是用表达式作为属性名，这时要将表达式放在方括号之内。

ES6允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。
```
    let propKey = 'foo';
    let obj = {
        [propKey]: true,
        ['a'+'bc']: 123
    };

    // 表达式还可以用于定义方法名
    let obj = {
        ['h'+'ello']() {
            return 'hi';
    }
    obj.hello() // hi;
};
```

**proto属性**
```
    // es6的写法
    
    let obj = {
        __proto__: someOtherObj,
        method: function() { ... }
    }
    
    // es5的写法
    
    var obj = Object.create(someOtherObj);
    obj.method = function() { ... }
```

---

### 两个对象内置方法
**Object.is()**：用来比较两个值是否严格相等：
```
    3 === 3   // true
    Object.is(3,3) // true

    3 == '3'  // true
    Object.is(3,'3') // false
 ```
 **Object.assign()**：方法用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。只要有一个参数不是对象，就会抛出TypeError错误。
```
    let target = { a: 1 };
    let source1 = { b: 2 };
    let source2 = { c: 3 };
    
    Object.assign(target, source1, source2);
    target // {a:1, b:2, c:3}
```
注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
```
    let target = { a: 1, b: 1 };
    let source1 = { b: 2, c: 2 };
    let source2 = { c: 3 };
    
    Object.assign(target, source1, source2);
    target // {a:1, b:2, c:3}
```

---

### 函数

##### 默认参数

```
    function sayHello(name){
        //传统的指定默认参数的方式
        var name = name||'邪七';
        document.write('Hello '+name);
    }
    
    //运用ES6的默认参数
    function sayHello2(name='邪七'){
        document.write(`Hello ${name}`);
    }
    sayHello();  //输出：Hello 邪七
    sayHello('邪七');  //输出：Hello 邪七
    sayHello2();  //输出：Hello 邪七
    sayHello2('邪七');  //输出：Hello 邪七
```

##### res参数

```
    function add(...values) {
        let sum = 0;
        
        for (let val of values) {
            sum += val;
        }
        
        return sum;
    }
    
    add(1, 2, 3) // 6
```

##### 扩展运算符

```
    
    var people=['张三','李四','王五'];
    
    //sayHello函数本来接收三个单独的参数people1，people2和people3
    function sayHello(people1,people2,people3){
        document.write(`Hello ${people1},${people2},${people3}`);
    }
    
    //es6
    //但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
    sayHello(...people);   //输出：Hello 张三,李四,王五 
    
    // es5
    //而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
    sayHello.apply(null,people);   //输出：Hello 张三,李四,王五
```

##### 箭头函数
箭头函数有几个使用注意点。
+ 函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象。
+ 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
+ 不可以使用arguments对象，该对象在函数体内不存在。
+ 上面三点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

```
    let array = [1, 2, 3];
    //传统写法
    array.forEach(function(v, i, a) {
        document.write(v);
    });
    //ES6
    array.forEach(v => console.log(v));    
```

---

### set

##### 基本用法
数据结构Set类似于数组，但是成员的值都是唯一的，没有重复的值。

```
    var s = new Set();
    
    [2,3,5,4,5,2,2].map(x => s.add(x))
    
    for (i of s) {log(i)}
    // 2 3 5 4
```

Set函数可以接受一个数组作为参数，用来初始化。

```
var items = new Set([1,2,3,4,5,5,5,5]);
logitems.size); // 5   去重后剩1,2,3,4,5  length 5
```

##### Set实例的属性

Set结构的实例有以下属性：
+ Set.prototype.constructor：构造函数，默认就是Set函数。
+ Set.prototype.size：返回Set实例的成员总数。

```
    let s = new Set();
    s.add(1).add(2).add(2);
    // 注意2被加入了两次
    
    s.size // 2
```

##### Set实例的方法

Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法：
+ add(value)：添加某个值，返回Set结构本身。
+ delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
+ has(value)：返回一个布尔值，表示该值是否为Set的成员。
+ clear()：清除所有成员，没有返回值。

```
    let s = new Set();
    s.add(1).add(2).add(2);
    
    s.has(1) // true
    s.has(2) // true
    s.has(3) // false
    s.delete(2);
    s.has(2) // false
```

Array.from方法可以将Set结构转为数组

```
    let items = new Set([1, 2, 3, 4, 5]);
    let array = Array.from(items);
```

##### Set遍历操作

Set结构的实例有四个遍历方法，可以用于遍历成员：
+ keys()：返回一个键名的遍历器
+ values()：返回一个键值的遍历器
+ entries()：返回一个键值对的遍历器
+ forEach()：使用回调函数遍历每个成员

由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以key方法和value方法的行为完全一致。

```
    let set = new Set(['red', 'green', 'blue']);
    
    for ( let item of set.keys() ){
        log(item);
    }
    // red
    // green
    // blue
    
    for ( let item of set.values() ){
        log(item);
    }
    // red
    // green
    // blue
    
    for ( let item of set.entries() ){
        log(item);
    }
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]
    
    set.forEach(function(item){
        log(item);
    })
```

---

### 类

##### Class基本语法

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。

```
//定义类
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return '('+this.x+', '+this.y+')';
        }
    }
```

上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。

**constructor方法**

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。

**实例对象**

```
    let point = new Point(2, 3);
    point.toString(1,2) // (1,2)
```

**name属性**

```
    class Point {}
    Point.name // "Point"
```

**class表达式**

与函数一样，Class也可以使用表达式的形式定义。

```
    const MyClass = class Me {
        getClassName() {
            return Me.name;
        }
    };
```

##### Class的继承

Class之间可以通过extends关键字，实现继承。

子类会继承父类的属性和方法。

```
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    
    class ColorPoint extends Point {
        constructor(x, y, color) {
            this.color = color; // ReferenceError
            super(x, y);
            this.color = color; // 正确
        }
    }
```

上面代码中，子类的constructor方法没有调用super之前，就使用this关键字，结果报错，而放在super方法之后就是正确的。

注意：ColorPoint继承了父类Point，但是它的构造函数必须调用super方法。

下面是生成子类实例的代码。

```
    let cp = new ColorPoint(25, 8, 'green');
    
    cp instanceof ColorPoint // true
    cp instanceof Point // true
```

---

##### class的取值函数（getter）和存值函数（setter）

在Class内部可以使用get和set关键字，对某个属性设置存值函数和取值函数。

```
    class MyClass {
        get prop() {
            return 'getter';
        }
        set prop(value) {
            log('setter: '+value);
        }
    }
    
    let inst = new MyClass();
    
    inst.prop = 123;
    // 存值  执行  setter:123
    
    inst.prop
    // 取值  执行  getter
```

上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。

##### Class的静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```
    class Foo {
        static classMethod() {
            return 'hello';
        };
        xieqi(name='邪七'){
            log(name);
        }
    }
    Foo.classMethod() // hello
    Foo.xieqi()       // Foo.xieqi is not a function

    let foo = new Foo();
    foo.classMethod();  // foo.classMethod is not a function
    foo.xieqi()         // 邪七    
```

父类的静态方法，可以被子类继承。

```
    class Foo {
        static classMethod() {
            return 'hello';
        }
    }
    class Bar extends Foo {
    }
    Bar.classMethod(); // 'hello'
```

静态方法也是可以从super对象上调用的。

```
    class Foo {
        static classMethod() {
        return 'hello'
        }
    }
    class Bar extends Foo {
        static classMethod() {
        log(super.classMethod() + ', too');
        }
    }
    Bar.classMethod()  // hello too
```

更多请访问：[阮一峰ES6](http://es6.ruanyifeng.com/)  

点击：[回到顶部](#列表)
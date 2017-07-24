## 使用方法
+ NG2使用在头部使用
    > import * as _ from 'lodash';  
     _ 须写在 constructor 函数内。
+ 其他方法参照官方文档：[lodash中文文档](http://lodashjs.com/docs/)

---

## 常用的Lodash函数

+ 数组过滤

```
    _.difference([1, 2, 3], [4, 2]);
    // => [1, 3]
    _.difference([1, '2', 3], [4, 2]);
    // => [1, "2", 3]
```        

+ 数组删除

```
    // 从前往后删
    _.drop([1, 2, 3]);
    // => [2, 3] 默认是1开始的
    _.drop([1, 2, 3], 2);
    // => [3]
    _.drop([1, 2, 3], 5);
    // => []
    _.drop([1, 2, 3], 0);
    // => [1, 2, 3]

    // 从后往前删
    _.dropRight([1, 2, 3]);
    // => [1, 2]
    _.dropRight([1, 2, 3], 2);
    // => [1]
    _.dropRight([1, 2, 3], 5);
    // => []
    _.dropRight([1, 2, 3], 0);
    // => [1, 2, 3]
```

+ 数组查询

```
    _.indexOf([1, 2, 1, 2], 2);
    // => 1
    _.indexOf([1, 2, 1, 2], 2, 2);
    // => 3
    _.indexOf([1, 1, 2, 2], 2, true);
    // => 2    
```

+ 数组删除

```
    // 删除所有匹配全等的
    var array = [1, 2, 3, 1, 2, 3];
    _.pull(array, 2, 3);
    console.log(array);
    // => [1, 1]    

    // 删除指定的
    var array = [5, 10, 15, 20];
    var evens = _.pullAt(array, 1, 3);
    console.log(array);
    // => [5, 15]
    console.log(evens);
    // => [10, 20]

    // 删除满足条件的
    var array = [1, 2, 3, 4];
    var evens = _.remove(array, function(n) {
    return n % 2 == 0;
    });
    console.log(array);
    // => [1, 3]
    console.log(evens);
    // => [2, 4]
```

+ 数组取值

```
    // 从左往右取
    _.take([1, 2, 3]);
    // => [1]

    _.take([1, 2, 3], 2);
    // => [1, 2]

    _.take([1, 2, 3], 5);
    // => [1, 2, 3]

    _.take([1, 2, 3], 0);
    // => []

    // 从右往左取
    _.takeRight([1, 2, 3]);
    // => [3]

    _.takeRight([1, 2, 3], 2);
    // => [2, 3]

    _.takeRight([1, 2, 3], 5);
    // => [1, 2, 3]

    _.takeRight([1, 2, 3], 0);
    // => []
```

+ 数组转字符串

```
    _([1, 2, 3]).toString();
    // => '1,2,3'
```

+ 数组对象的删除

```
    let arr1 = [
        { "age" : 18 },
        { "age" : 20 }
    ];

    _.remove(arr1,(el) => el.age === arr1.age);

    简写：
    let obj1 = { 'age' : 20 };
    _.remove(arr1,function(obj){
        return obj1.age === arr1.age
    });
    console.info(arr1)   // [ { "age" : 18 }];
```

+ 数组对象的查找

```
    let arr1 = [
        { "age" : 18 },
        { "age" : 20 }
    ];

    _.some(arr1,{ "age" : 20 });     //  true
```




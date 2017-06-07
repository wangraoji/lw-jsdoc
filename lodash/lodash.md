## 使用方法
+ NG2使用在头部使用
    > import * as _ from 'lodash';
    > _ 须写在 constructor 函数内。
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
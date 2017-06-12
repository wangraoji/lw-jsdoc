#### Promise的含义
所谓Promise，就是一个对象，用来传递异步操作的消息。

Promise对象有以下两个特点:

+ 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

+ 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

Promise也有一些缺点:
+ 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
+ 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
+ 第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

#### 基本用法
Promise对象是一个构造函数，用来生成Promise实例

```
//创建promise
    var promise = new Promise(function(resolve, reject) {
        // 进行一些异步或耗时操作
        if ( /*如果成功 */ ) {
            resolve("Stuff worked!");
        } else {
            reject(Error("It broke"));
        }
    });
    //绑定处理程序
    promise.then(function(result) {
        //promise成功的话会执行这里
        document.write(result); // "Stuff worked!"
    }, function(err) {
        //promise失败会执行这里
        document.write(err); // Error: "It broke"
    });
```
+ resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
+ reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

#### Promise实例添加状态改变时的回调函数

Promise实例具有then方法，也就是说，then方法是定义在原型对象,作用是为Promise实例添加状态改变时的回调函数。

then方法两个参数：

+ Resolved状态的回调函数；
+ Rejected状态的回调函数（可选）。

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

```
    getJSON("/posts.json").then(function(json) {
        return json.post;   
    }).then(function(post) {
        // ...
    });
```
上面的代码使用then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

#### 指定发生错误时的回调函数

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

```
    getJSON("/posts.json").then(function(posts) {
        // ...
    }).catch(function(error) {
        // 处理前一个回调函数运行时发生的错误
        log('发生错误！', error);
    });
```


### NG2 localStorage怎么用？

* 很简单，先在你当前目录建1个 local_storage.ts

* 内容如下：

```
    import  { Provider } from '@angular/core';

    export class LocalStorage {
        public localStorage:any;

        constructor() {
            if (!localStorage) {
                throw new Error('Current browser does not support Local Storage');
            }
            this.localStorage = localStorage;
        }

        public set(key:string, value:string):void {
            this.localStorage[key] = value;
        }

        public get(key:string):string {
            return this.localStorage[key] || false;
        }

        public setObject(key:string, value:any):void {
            this.localStorage[key] = JSON.stringify(value);
        }

        public getObject(key:string):any {
            return JSON.parse(this.localStorage[key] || '{}');
        }
        public remove(key:string):any {
            this.localStorage.removeItem(key);
        }
    }
```

* **app.component.ts** 要用了只需要引入即可，代码如下：

```
    import { Component } from '@angular/core';

    import { LocalStorage } from './local_storage'

    @Component({
        selector: 'app-root',
        template: `
            <button (click)='onSet()'>设置值</button>
            <button (click)='onGet()'>取值</button>
            `,
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // LocalStorage是一个构造函数，想用里面的参数时必须要new一个实例对象不能直接 LocalStorage.get
        // 不清楚的可以看看ES6 和 typescript 语法。回到本项目首页可以看到。
        localStorage = new LocalStorage();
        onSet(){
            this.localStorage.set('name','邪七')
            // F12 开发人员工具 可以看到 Console 那一排有个 Application，点进去   
            // 找到左下方有个 local storage，可以看到你设置键值对
        }
        onGet(){
            this.localStorage.get('name');  // 输出邪七 
        }
    }

```

* 下面看如何存一个对象：

```
  onSet(){
    this.localStorage.setObject('data',{'name':'邪七','age':18})
  }
  onGet(){
    console.log(this.title = this.localStorage.getObject('data'));
    // 输出 {'name':'邪七','age':18}  
    // 我永远18岁~~~
  }
```

* local_storage.ts 也是可以拓展的，前提你需要知道 localstorage有什么方法，我这里添加个清空所有的：

```
    // void 表示没有返回值
    // localStorage有个.clear() 方法清空所有
    // 还有一个 .key() 方法，我这里就不做演示了！
    public remove(key:string):void {
        this.localStorage.clear();
    }
```


* 这时候大家可能发现一个问题，所有东西都是存在 http:4200 下面，要是我做路由 http:4200/pages  下   
存的，我想在http:4200/pages/test 里面取可以吗？答案是可行的，不管你在哪里个路由存他都是在http:4200   
里面，所以即便在其他路由里也是可以取到的！






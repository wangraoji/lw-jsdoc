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
        }
        onGet(){
            this.localStorage.get('name');  // 输出邪七 
        }
    }

```



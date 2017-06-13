### Angular2 组件间通过@Input @Output通讯

* 首先先建2个组件。根组件和子组件。

* 子组件home.component.ts代码：

```
    import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

    @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnChanges {
        ngOnChanges(changes: SimpleChanges): void {
            // console.log(changes['isShow']);
            this.isShow1 = changes['isShow'].currentValue;
        }
        @Input() isShow : boolean
        _name: string = '';
        @Input() set name(name: string) {
            this._name = (name && name.trim()) || '';
        }

        //声明事件发射器
        @Output() checkEmitter = new EventEmitter<boolean>();
        //用于绑定checkbox的checked属性
        isChecked = true;
        
        constructor() { }

        ngOnInit() {
        }

        onClick() {
            this.isShow1 = true;
            this.checkEmitter.emit(this.isChecked);
        }
    }
```

* 关于引入我就不多说了，可查询NG2官网。可以看到上面代码中多了2个 @Input装饰器   
   上面的代码设置了两个可供父组件传入的属性**isShow**和**name**,当设置**name**属性时，**set name(name:string)** 方法会执行,  
   如果不需要处理**setter**，那么用**isShow**的形式，一行代码声明即可.

```
    <app-home [isShow]="isShow" name="姓名"></app-home>
```

* 下面看父组件app.component.ts代码：

```
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
    export class AppComponent{
        title = '根组件标题';
        isShow: boolean = true;

        onCheckedChange(isChecked: boolean) {
            this.isShow = isChecked;
        }

        onClickIsShow() {
            this.isShow = false;
        }
    }

```

* 上面可以看到 子组件html里有个按钮调用 **onClick()** 事件，把 **this.isChecked == true** 传给了父组件，  
  父组件通过了 **onCheckedChange()** 事件得到了这个 **true** 并赋值给了**this.isShow**，下面看父组件HTML代码：  

  ```
    // 这里可以看到 div 绑定了一个 hidden 为 !isShow；
    // 如果isShow 为 true, 取反就是 false   为false的时候，则父组件显示。
    <div [hidden]='!isShow'>
         <button (click)='onClickIsShow()'>点击显示home组件</button>
    </div>
    <app-home [isShow]='isShow' name="姓名" (checkEmitter)="onCheckedChange($event)" ></app-home>
  ```
  
* 当点击**button**时，把 **isShow** 赋值为 **false**，要传给子组件则是通过上面代码中的 **[isShow]='isShow'**，是在那么   
  子组件则通过 **ngOnChanges()** 取到了值。然后赋值给了 **this.isShow1**

* 下面看子组件home.component.html代码：

```
    // 取到的值isShow1为falses 所有子组件显示，父组件隐藏。
    <p [hidden]='isShow1'>
        <button (click)='onClick()'>点击显示根组件</button>
    </p>

```

* 如有不明白的可移步：[NG2-demo组件之间的通讯](../demo/com)
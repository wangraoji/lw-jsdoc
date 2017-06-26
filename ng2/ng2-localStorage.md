### NG2 localStorage怎么用？

* 很简单，直接 **localStorage.xx** 调用，因为它本身就是属于 **window** 的内置方法。   
 类似 **console.xx** 。

* 下面先来简单的介绍下它的几种用法：  

    1  **localStorage.setItem(key,value)** 数据存储：
        >   存储的是键值对，key 是键，value 是值。   
        >   localStorage.setItem("name","caibin")    
        >   localStorage.name = "caibin";   // 等价于上面的命令   
        >   console.log(localStorage)       // Storage {name: "caibin", length: 1}


* 下面直接看示例：**app.component.ts**

 ```
import { Component} from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <input type="text" name="text" [(ngModel)]='this.text'>
    <button (click)='onSetData()'>储存数据</button>
    <button (click)='onGetData()'>获取数据</button>
    <button (click)='onClearData()'>删除数据</button>
  `,
})
export class HomeComponent{
  public text :string = ''
  onSetData(){
     localStorage.setItem('data',this.text)
  }
  onGetData(){
      console.log(localStorage.getItem('data'))
  }
  onClearData(){
      localStorage.clear()
  }
}

 ```








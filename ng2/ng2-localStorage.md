### NG2 localStorage怎么用？

1. 很简单，直接 **localStorage.xx** 调用，因为它本身就是属于 **window** 的内置方法。   
 类似 **console.xx** 。

2. 下面先来简单的介绍下它的几种用法：  

    **localStorage.setItem( key, value )** 数据存储：

           存储的是键值对，key 是键，value 是值。   
           localStorage.setItem( "name", "邪七" )    
           localStorage.name = "邪七";   // 等价于上面的命令   
           console.log(localStorage)       // Storage {name: "caibin", length: 1}

           也可存对象。
           let stu = { 'name':'邪七', 'age':18 };
           localStorage.setItem( "stu", stu );


    **localStorage.getItem( key )** 数据取值：

    ```
      取值的时候传入键名，取值。  
      localStorage.getItem("name")  //  邪七
      localStorage.name             //  邪七
      localStorage.valueOf()        //  去除所有的数据
      localStorage.key(index)       //  存入索引，取对应的数据（键名 key）

      // 遍历并输出localStorage里存储的名字和值
      for(var i=0; i<localStorage.length;i++){
          console.log(
            'localStorage里存储的第' 
            + i 
            + '条数据的名字为：'+localStorage.key(i)
            + ',值为：'
            + localStorage.getItem(localStorage.key(i)));
      }
      localStorage.key(i) 取出键名，localStorage.getItem(localStorage.key(i))) 通过键名取值
    ```

    **localStorage.removeItem( key )** : 传键名删除对应的键值对。

    **localStorage.clear()** : 删除localStorage里的所有数据。

    **localStorage.hasOwnProperty( key )** : 检查 localStorage 里是否保存某个变量.

    **.toLocaleString()** 方法将可以将数组转为本地字符串：

    ```
      let arr = ['aa','bb','cc'];         //  ["aa","bb","cc"]
      localStorage.arr = arr              //  ["aa","bb","cc"]
      localStorage.arr.toLocaleString();  //   "aa,bb,cc"
    ```

    **将JSON存储到localStorage里：**

    ```
      let students = {
          xiaomin: {
              name: "xiaoming",
              grade: 1
          },
          teemo: {
              name: "teemo",
              grade: 3
          }
      }
      students = JSON.stringify(students);          // 将JSON转为字符串存到变量里
      console.log(students);
      localStorage.setItem("students",students);    //  将变量存到localStorage里
      let newStudents = localStorage.getItem("students");
      newStudents = JSON.parse(students);           //  转为JSON
      console.log(newStudents);                     //  打印出原先对象
    ```

3. 下面直接看示例：**app.component.ts**

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








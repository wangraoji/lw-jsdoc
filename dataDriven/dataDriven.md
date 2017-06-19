### 数据驱动

* 关于数据驱动，什么是数据驱动，它的价值又是什么，其实百度搜一下就知道。但是我不知道是不是很多人   
跟我一样，不愿去看那长篇大论。所以本章我简单按我个人的理解来分解一下数据驱动。

* 首先，我得说明一点，不愿看和不看是两码事。不愿看你可能有实战经验，理解原理，或者说有大神跟你讲解过。   
那么不看又是另一码事了。我就不多废话了。

* 那么怎么来理解我们的数据驱动呢？

* 假设，我们现在有一个table，里面的数据都是动态生成的。假设我要做列合并。（就是2列合在一起）
    > 假设有 A , B ,C ,D ,E 5列。我要合并BC列，变成 A ,BC ,D E,4列。   
    jq的话，肯定要去操作dom。并且把里面的数据拼接在一起。切不论性能如何，光效率肯定不怎么好。   

    > 假设数据驱动的话，应该是 1 行是 1个对象， 里面有 A.B.C.D.E 5个子对象。那么我们只要   
    操作数据中B,C对象，把这2列数据结合在一起。页面自然而然就呈现出了  A,BC,D,E 4列了。     
     
    > 可能没做过的有些迷糊，表格的列是跟你对象的个数来的，你只有4个对象了，那么列也变4列了。

* 每个人都有自己不同的理解，我仅表达我自己个人理解，下面我写个最基础的小例子来诠释一下数据驱动。


---

### 数据驱动DEMO    

* 首先我们得NEW一个新的项目，不会的可以回到首页看 NG2 CLI 手脚架那一章。

* 项目建好后，我们需要一个假的数据，我这里使用的是 淘宝的RAP。怎么使用我就不说了，我附上   
链接，有空的可以看下，很好的东西。[淘宝RAP中文网](http://rapapi.org/org/index.do)

* 我在RAP上随便添了一个接口为 getData 的假数据 [100,200,300,400]，我想通过一个按钮，点击一下，页面一个   
DIV的长宽高会变成 100 200 300 400， 当你改变数据时，你不需要修改页面任何东西，只需要再次点击按钮，DIV会   
根据你设定的值自动变换。 这就是数据驱动的好处。

* 首先我们看 **app.component.ts** 代码：

```
    import { Component } from '@angular/core';

    // get请求需要的参数
    import { Http, Response, RequestOptions, Headers } from '@angular/http';

    @Component({
    selector: 'app-root',
    template: `
        <h3 class="top">展示区</h3>
        <button (click)='onClick()'>点击获取数据</button>
        <div class="box">
        <div class="show" [ngStyle]="setStyles"></div>
        </div>
        `
    ,
    styles: [`
        .top {
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #c0c0c0;
        }
        .box {
            height: 500px;
            padding: 50px;
            border-bottom: 1px solid #c0c0c0;
        }
        .show {
            transition:0.8s all,
        }
    `]
    })

    export class AppComponent {
        // 定义一个 setStyles 类型为 boj
        setStyles: object;
        // private http: Http  请求数据的私有属性  http 为 Http类型
        constructor(private http: Http) {

        }
        onClick() {
            // 请求数据的地址
            this.http.get('http://rapapi.org/mockjs/20906/getData?')
            // 返回回来后的参数
            .subscribe((res: Response) => {
                let arr = res.json().data;
                // 因为我知道是个数组，里面只有4个，我就写了4个，
                let colors = ['red', 'blue', 'green', 'purple'];
                let num = 0;
                // 设置个定时器，1S设置1一次，每次都是最新的。
                let dataTime = setInterval(() => {
                if (num < arr.length) {
                    this.setStyles = {
                    'width': arr[num] + 'px',
                    'height': arr[num] + 'px',
                    'background': colors[num]
                    }
                    num++
                } else {
                    clearInterval(dataTime);
                }
                }, 1000)
            });
        }
    }

```

* 这时候你打开浏览器，点击按钮，你会发现 DIV 大小会从 100 通过0.8S的过渡 变到 200 -- 300 -- 400，   
你只要改变数据，重新点击按钮获取数据，你会发现DIV会根据你设置的数据去改变。这就是数据驱动的好处。

* 如果不想点击按钮去改变吗，只需要把里面的 http 请求的数据写在 constructor 里，你每次改变数据，刷新浏览器即可。

* 想更加详细的理解数据驱动的，我分享一个好的文章：[前端数据驱动的价值](https://segmentfault.com/a/1190000004400337)


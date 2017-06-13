##  工作流程
##### 上班
* 切换到MES分支
    > git checkout mes
* 更新代码
    > git pull
* 切回到自己的分支
    > git checkout 自己的分支
* 合并代码
    > git merge mes
* 更新代码
    > git pull    

##### 下班
+ 查看所有未add的代码
    > git status
+ 添加到本地仓库
    > git add .   (add .是添加所有修改的)
+ 添加到远程仓库
    > git commit -m '这里写你的注释'
+ push到远程服务端
    > git push 自己定义的源 自己的分支 

##### 需要用到的GIT指令
[一些常用的git指令](gitInstructions/gitInstructions.md)

--- 

## 一些知识点
+ **console.log输出**：
    > var log = console.log.bind(console);  
    > log(xxx);
+ **Promise**：[用来传递异步操作](peomise/peomise.md)

+ **时间戳**：[后台获得的时间戳转换](timeStamp/timeStamp.md)  

+ **Lodash**：[常用的Lodash方法](lodash/lodash.md)  

+ **ES6使用**：[ES6基础语法文档](es6/es6.md)

+ **NG2一些组件**：[ng2组件](https://github.com/brillout/awesome-angular-components)

+ **NG2 bootstarp样式**：[bootstarp样式](http://valor-software.com/ngx-bootstrap)

+ **NG2资源大全**：[资源大全](https://github.com/ascode/awesome-ng2)

+ **angularjs2 一些报错的概览（数据为json格式）**：[angularjs2 一些报错的概览（数据为json格式）](ng2/ng2-errors.md)
---

## NG-2 相关

1. **ng2环境安装**：[ng2-Cil手脚架](ng2/ng2-componentCommunication.md)

2. **get请求**：[getQuery](ng2/ng2-getQuery.md)

3. **post请求**：[postQuery](./ng2/ng2-postQuery.md)

4. **NG报错预览**：[errors](./ng2/ng2-errors.md)

--- 

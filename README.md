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
+ **Promise**：[用来传递异步操作](peomise)

+ **最基本简单的倒计时**：[jq倒计时](daojishi)

+ **时间戳**：[后台获得的时间戳转换](timeStamp)  

+ **Lodash**：[常用的Lodash方法](lodash)  

+ **ES6使用**：[ES6基础语法文档](es6)

+ **typescript泛类**：[any and \<T\>](typescript)

+ **前端数据驱动**：[数据驱动的价值](dataDriven)

+ **服务器简单设置**：[服务器基本使用](server)

---

## NG-2 相关
+ **NG2 权威教程电子版**：[ng2-book2](ng2)

+ **NG2 环境安装**：[ng2-Cli手脚架](ng2/ng2-environmentalScience.md)

+ **NG2 get请求**：[getQuery](ng2/ng2-getQuery.md)

+ **NG2 post请求**：[postQuery](./ng2/ng2-postQuery.md)

+ **NG2 组件之间的通讯**：[@Inuput/@Output](ng2/ng2-componentCommunication.md)

+ **NG2 localStorage**：[localStorage设置值/取值](ng2/ng2-localStorage.md)

+ **NG2 最常见报错**：[AppModule is not an NgModule](ng2/ng2-AppModule.md)

+ **NG2 报错预览**：[errors](./ng2/ng2-errors.md)

+ **NG2 一些组件**：[ng2组件](https://github.com/brillout/awesome-angular-components)

+ **NG2 bootstarp样式**：[bootstarp样式](http://valor-software.com/ngx-bootstrap)

+ **NG2 资源大全**：[资源大全](https://github.com/ascode/awesome-ng2)

+ **NG2 打包Dist**：[npm run build:prod](./ng2/ng2-ci.md)
--- 

## 前端调试
+ [console对象](debug/console.md)  
log()，info()，debug(),warn()，error(),table(),count(),dir(),assert(),time()，timeEnd(),profile()，profileEnd(),group()，groupend()，groupCollapsed(),trace()，clear()...


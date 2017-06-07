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
* 查看所有未add的代码
    > git status
* 添加到本地仓库
    > git add .   (add .是添加所有修改的)
* 添加到远程仓库
    > git commit -m '这里写你的注释'
* push到远程服务端
    > git push 自己定义的源 自己的分支 

##### 需要用到的GIT指令
[一些常用的git指令](gitInstructions/gitInstructions.md)

--- 

## 一些常用的API
[后台获得的时间戳转换](timeStamp/timeStamp.md)

---

## NG-2 HTTP请求

1. **get请求**：[getQuery](ng2/ng2-getQuery.md)

2. **post请求**：[postQuery](./ng2/ng2-postQuery.md)

--- 

### 前提条件
+ 必须的几个软件：

    - SecureCrt （链接服务器工具）

    - FlashFxp （把本地打包好的文件上传到服务器的工具）



### 描述

+ 把文件上传上去之后，ls查看当前目录，cd 进入项目文件夹，npm install

+ 完成后，在当前项目内运行：pm2 start app.js --name "xxx"

+ 把项目挂上后，需要开启防火墙。

+ sudo firewall-cmd --list-all  查看当前已开启的端口

+ sudo firewall-cmd --add-port=8000/tcp --permanent    （--permanent表示永久开放）

+ sudo firewall-cmd --reload 开放端口后，需要重启下端口

+ 启动好后，可直接打开 xxx.xxx.xxx.xxx:8000 打开项目了。

### 相关指令

+ vi xxx.xxx  比如 text.txt  如果该文件已存在则打开文件，else 创建并进入文件
    + 进入文件后 处于查看模式， i 进入编辑模式
    + 编辑完后 esc 退出当前模式，然后shlft + :  进入指令模式
    + w 保存， q 退出， wq保存退出 q! 强退。

+ mkdir xxx  创建文件夹    

+ mv 指令移动  相当于改名  

+ rm -rf 删除目录

### 常用pm2指令

+ $ pm2 list  列出所有以PM2开始的进程 

+ $ pm2 show [app-name]            ＃  显示应用程序的所有信息 

+ $ pm2 flush   刷新

+ $ pm2 start app.js --name ='first-table' ＃  启动应用程序并将其命名为“first-table”

+ $ pm2 stop all                  # 停止所有应用程序 

+ $ pm2 stop 0                    # 停止ID为0的进程 

+ $ pm2 restart all               # 重新启动所有应用程序  

+ $ pm2 gracefulReload all        # 重新加载所有应用程序 

+ $ pm2 delete all                # 删除所有的应用程序

+ $ pm2 delete 0                  # 删除ID为0的应用程序 

### pm2 管理流程

+ $ pm2 list

+ $ pm2 stop     <app_name|id|'all'|json_conf>

+ $ pm2 restart  <app_name|id|'all'|json_conf>

+ $ pm2 delete   <app_name|id|'all'|json_conf>

+ 访问更多[npm pm2](https://www.npmjs.com/package/pm2)

https://www.linuxidc.com/Linux/2016-09/134907.htm
linux系统下安装nginx

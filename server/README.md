### 前提条件
+ 必须的几个软件：

    - SecureCrt （链接服务器工具）

    - FlashFxp （把本地打包好的文件上传到服务器的工具）

### 指令

+ 把文件上传上去之后，要运行：pm2 start app.js --name="xxx"

+ 把项目挂上后，需要开启防火墙。

+ sudo firewall-cmd --list-all  查看当前已开启的端口

+ sudo firewall-cmd --add-port=8000/tcp --permanent    （--permanent表示永久开放）

+ sudo firewall-cmd --reload 开放端口后，需要重启下端口

+ 启动好后，可直接打开 xxx.xxx.xxx.xxx:8000 打开项目了。

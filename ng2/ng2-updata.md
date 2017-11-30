### angular2升级教程 ng2-ng4升到ng5

注：ng2-5 不表示 angular2-5  ng2-ng5表示的是2.0.0版本到5.0.3。


1. 先把全局 @anuglar/cli 升到最新  1.5.0以上（17.11.30 1.5.5版本）
    + 1.1 npm uninstall -g @angular/cli

    + 1.2 npm install -g @angular/cli@latest（17.11.30最新1.5.5 项目是 5.0.3）

    + 1.3 然后到你项目里 npm install --save-dev @angular/cli@latest

    + 理论是删除成功的，假设删除不成功怎么办？

    + 2.1 找到全局安装路径 默认 C:\Users\Administrator\AppData\Roaming\npm\node_modules 

    + 2.2 把当前路径下的 @angular （cli）文件直接右键删除。

    + 2.3 然后再 npm install -g @angular/cli@latest

    + 2.4 如果装了半小时还没成功，直接cltr+c 取消， cnpm install -g @angular/cli@latest 1分钟不到完事

    + 具体cnpm 和 npm 有人说是有区别，有人说是没区别，本人表示没有研究。

2. 把ng2项目里的的东西全更新到最新：
    
    + 2.1 npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest typescript@latest --save    

    + 2.2 npm install zone.js@latest --save

    + 2.3 都更新完后，npm install 重置一下！



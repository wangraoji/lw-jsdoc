### 关于npm run build:prod 打包各个机器以及环境出现的各种问题解决方案：

+ 常见报错：异常：Module not found: Error: Can‘t resolve ‘./$$_gendir/app/app.module.ngfactory’

    - 这问题一般是cli版本太低了。只需要吧原来的 node_modules 删了，
    - 然后 npm install --save-dev @angular/cli@latest
    - 最后重新安装依赖 npm install

+ 除去这种能查到解决方案的问题，还有一些不可遇见的问题。

    - 如 npm run build:prod 打包时需要的 package.json 是需要 ./A/package.json
    - 但是项目读取的 package.json 是在 ./A/B/package.json
    - 这时候就会报错了，当你把 B 目录下的 package.json 移到 A 下面后，你会发现，项目读不到了，打包也会报错了。

+ 像这种问题我看一些angular技术群里说法不一，我挑一条通俗易懂的。

    - 假设目前开发团队只有5人，你可以统一环境，系统之类。你可以保证不会出不可预见的问题
    - 那要是人多了，怎么办呢？

+ 下面就说重点了。

    - 首先我们看我们cli项目里的 package.json 里的 build 配置； build:"npm run clean:dist && ng build"
    - 当我们执行 npm run build:prod 的时候，回去执行 上面那一段，再到 "build:prod": "npm run build -- --prod"。
    - 其实 npm run build:prod 就是相当于执行了 ng build --prod，
    - 到了这一段之后，就会可能因为各种问题出错了。
    - 解决方法很简单， 
    - 只需要将 build:"npm run clean:dist && ng build" 改成 "build": "ng build --prod --no-extract-license"
    - 这时候 npm run build:prod 就是相当于执行了 ng build --prod--no-extract-license
    - 后面多了个参数 --no-extract-license，这意思是：不提取License注释信息  姑且可以理解为过滤了一些未知的报错提示。
    - 只要你ng serve 能跑起来，打包就能OK。
    - npm run build:prod 打包出来的dist 和  ng build --prod--no-extract-license 打包出来的 dist 都是一样的。

+ 至于说  ng build --prod  和 ng build --prod--aot

    - angular2有摇树优化，ng build --prod 就等于执行了 ng build --prod--aot。
    - 所以两个指定打包出来的大小都是一样，都是压缩过的。
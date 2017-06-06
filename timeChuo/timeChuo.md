## 获取到的参数
我们一般从后台获取到的是：/Date(1483286400000)/
下面有2种方法解决：
```
    let time = '/Date(1483286400000)/';
    // 先把 前后 / / 删掉
    time = time.replace(/\//g,'')    // 得到 Date(1483286400000);
    // 用eval方法  newTime = new Date(1483286400000);
    let newTime = eval('new ' + time);
    conosle.log(newTime)  // 得出 'Mon Jan 02 2017 00:00:00 GMT+0800 (中国标准时间)'

    // 下面第1种方法（也是用的比较多的）
    newTime = newTime.toLocaleString().slice(0,9); // 得出 "2017-1-2 00:00:00"   截取前面9位  2017-1-2

    // 第2种方法
    newTime = newTime.toISOString().slice(0,10); // 得出 "2017-01-01T16:00:00.000Z" 截取前面10位 2017-01-01
```

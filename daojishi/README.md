### Jq 倒计时

```
    var t = null;
    t = setTimeout(time, world.sec);
    function time() {
        clearTimeout(t);
        dt = new Date();
        var nian = dt.getFullYear(), 
        yue = dt.getMonth() + 1, 
        day = dt.getDate(), h = dt.getHours(), 
        m = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes(), 
        s = dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds();
        
        $('element').html(nian + "/" + yue + "/" + day + "  " + h + ":" + m + ":" + s);

        t = setTimeout(time, world.sec);
    }
```
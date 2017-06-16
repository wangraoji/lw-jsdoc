## 用法
``` 
    import {Http,Response,RequestOptions,Headers} from '@angular/http';

    constructor(private http: Http) {
    let a = {}; // 这里写你要传的参数
    this.http.post('这里写你的query的url', JSON.stringify(a))
      .subscribe((res: Response) => {
            console.log(res.json())
      });
    }

## 用法
``` 
    import {Http,Response,RequestOptions,Headers} from '@angular/http';

    constructor(private http: Http) {
    let a = {};
    this.http.post('这里写你的query的url', JSON.stringify(这里写你要传的参数))
      .subscribe((res: Response) => {
            console.log(res.json())
      });
    }

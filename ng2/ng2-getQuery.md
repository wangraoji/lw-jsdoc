## 用法
``` 
    import {Http,Response,RequestOptions,Headers} from '@angular/http';

    constructor(private http: Http) {
    this.http.get('这里写你的query的url')
      .subscribe((res: Response) => {
            console.log(res.json())
      });
    }

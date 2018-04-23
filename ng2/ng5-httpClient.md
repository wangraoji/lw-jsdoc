### ng5 httpClinet 请求封装服务方法！

#### 废话不多说，直接上代码！

1. http.service.ts  (全局http请求服务)

2. page.service.ts

3. page.component.ts

#### http.service.ts

~~~
// 这里我只封装了get post 请求 environment是干嘛的我就不多说了！
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class HttpService {
    constructor(private http: HttpClient) { }
    get(url: string): any {
        return this.http.get(environment.url + url);
    }

    post(url: string, cs: any): any {
        return this.http.post(environment.url + url, cs);
    }
}

~~~


#### page.service.ts

~~~
import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

import { Observable } from 'rxjs';

// 如果不需要再服务里对请求回来的数据做处理则不需要引入
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class PageService {
    constructor(public http: HttpService) { }

     // 登陆验证
    confirm(parm): Observable<any[]> {
        return this.http.post("loginApi", parm )
        .pipe();
    }

    // 对请求会的数据做处理
    getData(parm): Observable<any[]> {
        return this.http.post("dataApi", parm )
        .pipe(
            map((res: any) => {
                let newData = [];
                res.list.forEach((el: any) => {
                   newData.push({
                       name: el.name,
                       age: el.age,
                   })
                })
                // 做完处理后必须returan 页面 subscribe 后取的就是做完处理后的数据
                return newData;
            }),
            tap(h => { }),
        );
    }
}
~~~

#### page.component.ts

~~~
ngOnInit(){
    this.srv.confirm(this.userLogin).subscribe((res: any) => {
        if (res.isOk) {
                alert(`登陆成功`);
        } else {
            alert(`账号或密码错误`);
        }
    })

    // 昨晚处理后的数据
    this.srv.getData(parm).subscribe((res: any) => {
        log(res); 
        // 输出处理后的数据
        // [{name:"zs",age:18},···]
    })
}
~~~
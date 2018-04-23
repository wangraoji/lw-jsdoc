### ng5 官方验证库以及自定义验证封装

#### 废话不多说，直接上代码！

1. validator.component.html

2. validator.component.scss

3. validator.component.ts

4. validatorLib.ts (自定义验证库)

#### validator.component.ts

~~~
    import { Component, OnInit } from '@angular/core';
    import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
    import { mobileValidator, passValidator } from './validatorLib';
    @Component({
        selector: 'validator',
        templateUrl: './validator.component.html',
        styleUrls:['./validator.component.scss']
    })
    export class ValidatorComponent {
        private myForm: FormGroup;
        str:any;
        constructor(private fb: FormBuilder) {
            this.createForm();
        }
        ngOnInit() {
        }

        // 创建表单元素
        createForm() {
            this.myForm = this.fb.group({
                username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
                mobile: ['', [Validators.required, mobileValidator]],
                email: ["", [Validators.required, Validators.email]],
                password: this.fb.group({
                    pass1: ['', [Validators.required]],
                    pass2: ['', [Validators.required]]
                }, { validator: passValidator })
            });

        }

        // 提交表单函数
        postDate() {
            /**
            * valid:是否有效
            * invalid:无效
            * dirty:脏
            * status:状态
            * errors:显示错误
            */
            if (this.myForm.valid) {
                console.log(this.myForm.value);
                this.str = JSON.stringify(this.myForm.value);
            }

        }
    }
~~~

#### validator.component.html

~~~
<div class="ui-g">
    <div class="ui-g-12">
        <div class="ui-g-2"></div>
        <div class="ui-g-8" style="text-align: center;">表单验证</div>
        <div class="ui-g-2"></div>
    </div>
    <div class="ui-g-12">
        <div class="ui-g-2"></div>
        <div class="ui-g-8" style="text-align: center;">
            <form [formGroup]="myForm" (ngSubmit)="postDate()">
                <div class="ui-g-12">
                    <div class="ui-g-4" style="text-align: right;">
                        <label for="username">用户名:</label>
                    </div>
                    <div class="ui-g-8" style="text-align: left;">
                        <input type="text" placeholder="请输入用户名" class="form-control" id="username" formControlName="username" />
                        <div [hidden]="myForm.get('username').valid || myForm.get('username').untouched" style="text-align:left;display:inline-block;margin-left:10px">
                            <p [hidden]="!myForm.hasError('required','username')">用户名必填的</p>
                            <p [hidden]="!myForm.hasError('minlength','username')">用户名长度过短</p>
                            <p [hidden]="!myForm.hasError('maxlength','username')">用户名长度太长</p>
                        </div>
                    </div>
                </div>
                <ng-container formGroupName="password">
                    <div class="ui-g-12">
                        <div class="ui-g-4" style="text-align: right;">
                            <label for="pass1">密码:</label>
                        </div>
                        <div class="ui-g-8" style="text-align: left;">
                            <input type="password" class="form-control" placeholder="请输入密码" id="pass1" formControlName="pass1" />
                            <div [hidden]="myForm.get('password').get('pass1').valid || myForm.get('password').get('pass1').untouched" style="text-align:left;display:inline-block;margin-left:10px">
                                <p [hidden]="!myForm.get('password').hasError('required','pass1')">密码是必填的</p>
                            </div>
                        </div>
                    </div>
                    <div class="ui-g-12">
                        <div class="ui-g-4" style="text-align: right;">
                            <label for="pass2">确认密码:</label>
                        </div>
                        <div class="ui-g-8" style="text-align: left;">
                            <input type="password" class="form-control" placeholder="请再次输入密码" id="pass2" formControlName="pass2" />
                            <div [hidden]="myForm.get('password').get('pass2').valid || myForm.get('password').get('pass2').untouched" style="text-align:left;display:inline-block;margin-left:10px">
                                <p [hidden]="!myForm.get('password').hasError('required','pass2')">确认密码是必填的</p>
                                <p [hidden]="!myForm.hasError('passValidator','password') || myForm.get('password').hasError('required','pass2')">{{myForm.getError('passValidator','password')?.info}}</p>
                            </div>
                        </div>
                    </div>
                </ng-container>
                <div class="ui-g-12">
                    <div class="ui-g-4" style="text-align: right;">
                        <label for="mobile">手机号码:</label>
                    </div>
                    <div class="ui-g-8" style="text-align: left;">
                        <input type="text" placeholder="请输入手机号码" class="form-control" id="mobile" formControlName="mobile" />
                        <div [hidden]="myForm.get('mobile').valid || myForm.get('mobile').untouched" style="text-align:left;display:inline-block;margin-left:10px">
                            <p [hidden]="!myForm.hasError('required','mobile')">手机是必填的</p>
                            <p [hidden]="!myForm.hasError('mobileValidator', 'mobile') || myForm.hasError('required','mobile')">{{myForm.getError('mobileValidator', 'mobile')?.info}}</p>
                        </div>
                    </div>
                </div>
                <div class="ui-g-12">
                    <div class="ui-g-4" style="text-align: right;">
                        <label for="email">邮箱:</label>
                    </div>
                    <div class="ui-g-8" style="text-align: left;">
                        <input type="text" placeholder="请输入邮箱" class="form-control" id="email" formControlName="email" />
                        <div [hidden]="myForm.get('email').valid || myForm.get('email').untouched" style="text-align:left;display:inline-block;margin-left:10px">
                            <p [hidden]="!myForm.hasError('required','email')">邮箱是必填的</p>
                            <p [hidden]="!myForm.hasError('email', 'email') || myForm.hasError('required','email')">邮箱格式不对</p>
                        </div>
                    </div>
                </div>
                <div class="ui-g-12">
                    <input type="submit" value="提交" class="btn btn-warning" [disabled]="!myForm.valid" />
                </div>
            </form>
        </div>
        <div class="ui-g-2"></div>
    </div>
    <div class="ui-g-12">
        发送的值：{{ str }}
    </div>
</div>
~~~

#### validator.component.scss

~~~

.ng-touched:not(form),.ng-invalid:not(form) {
    border: 1px solid #f00;
    outline: none;
}

.ng-valid:not(form),.ng-untouched:not(form) {
    border: 1px solid #ddd;
    outline: none;
}
p{
    color:#f00;
}
~~~

#### validatorLib.ts (自定义验证库)

~~~
import { FormControl, FormGroup } from '@angular/forms';

export function mobileValidator(control: FormControl): any {
    // 获取到输入框的值
    const val = control.value;
    // 手机号码正则
    const mobieReg = /^[1][3,5,6,7,8][0-9]{9}$/;
    const result = mobieReg.test(val);
    return result ? null : { mobileValidator: { info: '手机号码格式不正确' } };
}


// 定义一个密码组的验证方法
export function passValidator(controlGroup: FormGroup): any {
    // 获取密码输入框的值
    const pass1 = controlGroup.get('pass1').value as FormControl;
    const pass2 = controlGroup.get('pass2').value as FormControl;
    const isEqule: boolean = (pass1 === pass2);
    return isEqule ? null : { passValidator: { info: '两次密码不一致' } };
}
~~~
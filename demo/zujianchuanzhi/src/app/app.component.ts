import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = '根组件标题';
  isShow: boolean = true;
  onCheckedChange(isChecked: boolean) {
    console.log(isChecked);
    this.isShow = isChecked;
  }
  onClickIsShow() {
    this.isShow = false;
  }
}

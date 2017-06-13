import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
  isChildrenTile: string = '子组件标题';
  isShow1 : boolean =true;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['isShow'].currentValue);
    this.isShow1 = changes['isShow'].currentValue;
  }

  _name: string = '';
  
  @Input() isShow : boolean
  @Input() set name(name: string) {
    this._name = (name && name.trim()) || '';
  }
  //声明事件发射器
  @Output() checkEmitter = new EventEmitter<boolean>();
  //用于绑定checkbox的checked属性
  isChecked = true;
  
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isShow1 = true;
    this.checkEmitter.emit(this.isChecked);
  }
}

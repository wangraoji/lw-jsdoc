import { Component, OnInit } from '@angular/core';
import { TransferenceService } from '../common.service';
@Component({
    selector: 'page',
    template: `
        <div>{{ whatDo }}</div>
    `,
})
export class PageComponent {
    whatDo: string;
    constructor(protected srv: TransferenceService) { }
    ngOnInit() {
        this.srv.registerToolClick((e) => {
            if (e === "吃饭") {
                this.whatDo = `该点外卖了！`;
                console.log(`点外卖`);
            }
            if (e === "回家") {
                this.whatDo = `回家记得锁门！`;
                console.log(`锁门`);
            }
        })
    }
}







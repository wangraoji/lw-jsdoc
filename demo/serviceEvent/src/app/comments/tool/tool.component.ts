import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'tool',
    template: `
        <ul>
            <li *ngFor="let do of whatDo" (click)="toDo.emit(do)">{{ do }}</li>
        </ul>
    `,
})
export class ToolComponent {
    whatDo: any = ['吃饭', '回家'];

    @Output() toDo = new EventEmitter<any>();
}




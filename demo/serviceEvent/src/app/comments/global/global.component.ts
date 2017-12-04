import { Component } from '@angular/core';
import { TransferenceService } from '../common.service';
@Component({
    selector: 'global',
    template: `
        <tool (toDo)="toDoFn($event)"></tool>
    `,
})
export class GlobalComponent {
    constructor(protected srv: TransferenceService) { }
    toDoFn(event) {
        this.srv.toolClick(event);
    }
}






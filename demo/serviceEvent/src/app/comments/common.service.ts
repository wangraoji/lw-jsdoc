import { Injectable } from '@angular/core';

@Injectable()

export class TransferenceService {
    public onToolClick = (e) => { };

    toolClick(e) {
        this.onToolClick(e);
    }

    registerToolClick(event) {
        this.onToolClick = event;
    }
}
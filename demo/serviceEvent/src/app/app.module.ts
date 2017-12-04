import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { PageComponent } from './comments/page/page.component';

import {GlobalComponent} from './comments/global/global.component';

import { ToolComponent } from './comments/tool/tool.component'; 

import { TransferenceService } from './comments/common.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    GlobalComponent,
    ToolComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [TransferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

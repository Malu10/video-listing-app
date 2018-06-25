import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { VideogalleryComponent } from './videogallery/videogallery.component';
import { VideoServiceService } from './video-service.service';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FilterPipe} from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    VideogalleryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
   providers: [VideoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

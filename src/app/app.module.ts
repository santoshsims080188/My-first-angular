import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgForDirComponent } from './ng-for-dir/ng-for-dir.component';
import { SytlechangeDirective } from './sytlechange.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForDirComponent,
    SytlechangeDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

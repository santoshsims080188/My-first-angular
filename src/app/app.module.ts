import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgForDirComponent } from './ng-for-dir/ng-for-dir.component';
import { SytlechangeDirective } from './sytlechange.directive';
import {RouterModule, Routes} from '@angular/router';
import {TemplateFormsComponent} from './template-forms/template-forms.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component'
const appRoutes : Routes= [
  {path:'', component:AppComponent},
  {path:'Directives', component:NgForDirComponent},
  {path:'TemplatesForms', component:TemplateFormsComponent},
  {path:'ReactiveForms', component:ReactiveFormsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NgForDirComponent,
    SytlechangeDirective,
    TemplateFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

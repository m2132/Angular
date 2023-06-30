import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
// import for ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddOneComponent } from './add-one/add-one.component';
import { ShowOneComponent } from './show-one/show-one.component';
import { ClassComponent } from './class/class.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './http/list-users/list-users.component';
import { ShowUserComponent } from './http/show-user/show-user.component';
import { AddUserComponent } from './http/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ListComponent,
    AddOneComponent,
    ShowOneComponent,
    ClassComponent,
    ListUsersComponent,
    ShowUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

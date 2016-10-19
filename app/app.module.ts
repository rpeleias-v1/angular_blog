import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { appRoutingProviders, routing } from './app.routing';
import { AppComponent }  from './app.component';
import { HomeComponent, LoginComponent, AddPostComponent } from './component';

import {HeadersService} from './service/headers';
import {LoginService} from './service/login';
import {UserService} from './service/user';
import {PostService} from './service/post';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, AddPostComponent ],
  providers: [appRoutingProviders, HeadersService, LoginService, UserService, PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
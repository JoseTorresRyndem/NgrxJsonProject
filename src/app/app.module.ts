import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {appReducer} from "./state/app.state";
import {PostEffects} from "./state/post/post.effects";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {UsersEffects} from "./state/users/users.effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterOutlet,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([PostEffects,UsersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contactReducer } from './modules/address-book/store/reducers/contact.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffect } from './modules/address-book/store/effects/contact.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contactState: contactReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([ContactEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

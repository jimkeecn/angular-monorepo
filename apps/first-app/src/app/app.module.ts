import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      StoreModule.forRoot({}, {}),
      EffectsModule.forRoot([]),
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
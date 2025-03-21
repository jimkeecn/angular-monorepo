import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import {  provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
        ...appConfig.providers,
        provideStore(),        // ✅ provide root store ONCE here
        provideEffects([]),    // ✅ provide root effects ONCE here
    ],
});

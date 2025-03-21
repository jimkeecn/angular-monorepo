import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

export const appRoutes: Route[] = [
    {
        path: 'chart-js',
        loadChildren: () => import('@angular-monorepo/chart-js/feature-shell').then(m => m.ChartJsFeatureShellModule)
    }
];

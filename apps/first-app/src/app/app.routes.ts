import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'chart-js',
        loadChildren: () => import('@angular-monorepo/chart-js/feature-shell').then(m => m.ChartJsFeatureShellModule),
    },
    {
        path: 'ag-grid',
        loadChildren: () => import('@angular-monorepo/ag-grid-feature-shell').then(m => m.FeatureShellModule),
    }
];

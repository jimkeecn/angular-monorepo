import { ChartJsFeatureShellModule } from '@angular-monorepo/chart-js/feature-shell';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'am-first-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}

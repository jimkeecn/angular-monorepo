import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'am-ag-grid-company-logo-renderer',
  standalone: false,
  templateUrl: './company-logo-renderer.component.html',
  styleUrl: './company-logo-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyLogoRendererComponent implements ICellRendererAngularComp {
  // Init Cell Value
  public value!: string;
  agInit(params: ICellRendererParams): void {
      this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
      this.value = params.value;
      return true;
  }
}

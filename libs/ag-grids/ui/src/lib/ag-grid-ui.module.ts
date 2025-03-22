import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogoRendererComponent } from './company-logo-renderer/company-logo-renderer.component';
import { ExpendButtonComponent } from './expend-buttonr/expend-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CompanyLogoRendererComponent, ExpendButtonComponent],
})
export class AgGridUiModule {}

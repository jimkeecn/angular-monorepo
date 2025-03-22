import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular'; 
import { ClientSideRowModelModule, ModuleRegistry, type ColDef, type GridReadyEvent, AllCommunityModule, GridOptions } from 'ag-grid-community'; 
import { CompanyLogoRendererComponent } from '@angular-monorepo/ag-grid-ui';
import { AgGridDataFacades } from '@angular-monorepo/ag-grid-data-access';
import { distinctUntilChanged } from 'rxjs';

ModuleRegistry.registerModules([AllCommunityModule])
@Component({
  selector: 'lib-ag-grid-feature-shell',
  templateUrl: './ag-grid-feature-shell.component.html',
  styleUrl: './ag-grid-feature-shell.component.scss',
  standalone:false,
})
export class AgGridFeatureShellComponent implements OnInit{

  rowData: any[] = [];

  defaultColDef: ColDef = {
    filter: true,
    sortable: true,
  }

  colDefs: ColDef[] = [
    { field: "mission" },
    {
      field: "company",
      cellRenderer: CompanyLogoRendererComponent,
    },
    { field: "location" },
    { field: "date" },
    {
      field: "price",
      valueFormatter: params => { return '$' + params.value.toLocaleString(); },
    },
    {
      field: "successful",
      valueFormatter: params => { return params.value ? 'Yes' : 'No'; },
      cellRenderer:null
     },
    {
      field: "rocket",
      onCellClicked: params => { alert(params.value); }
    },
    {
      field: "action",
      headerName: "Action",
      
    }
  ];

  constructor(private facades:AgGridDataFacades) {
    
  }

  onGridReady() : void{
    this.facades.loadData();
  }
  ngOnInit(): void {
    

    this.facades.data$.pipe(distinctUntilChanged()).subscribe(data => { 
      if (data && data.length > 0) {
        this.rowData = data
      } else {
        console.error('Table Data is not loaded back');
      }
    });
  }
}

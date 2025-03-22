import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AgGridDataState } from "../models/model";
import { loadTableData } from "./actions";
import { selectData } from "./selectors";


@Injectable({ providedIn: 'root' })
export class AgGridDataFacades{
    data$;

    constructor(private store:Store<AgGridDataState>) {
        this.data$ = this.store.select(selectData)
    }

    loadData() {
        this.store.dispatch(loadTableData())
    }
}
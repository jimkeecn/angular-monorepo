import { createReducer, on } from '@ngrx/store';
import { loadTableData, loadTableDataSuccess, loadTableDataFailure} from './actions';
import { initialState } from '../models/model';

export const tableDataReducer = createReducer(
    initialState,
    on(loadTableData, (state) => ({ ...state })),
    on(loadTableDataSuccess, (state, { data }) => { 
        return {
            ...state,
            data
        }
    })
)
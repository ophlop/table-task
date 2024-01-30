import { createStore } from 'vuex'
import data from '../mock/data.json'

interface RowData {
    id: number,
    name: string,
    description: string,
    date: string,
}

export interface State {
    tableData: RowData[],
    searchState: boolean
}

export const store = createStore<State>({
    state: {
        tableData: data,
        searchState: false
    },
    mutations: {
        SORT_TABLE(state, payload) {
            switch (payload) {
                case 'descending':
                    state.tableData.sort((a, b) => b.id - a.id)
                    break;
                case 'increasing':
                    state.tableData.sort((a, b) => a.id - b.id)
                    break;
            }
        },
        SEARCH_ROW(state, payload) {
            const searchPattern = new RegExp(payload.searchData, 'i');
            switch (payload.filter) {
                case 'Id':
                    state.tableData = data.filter(item => item.id === Number(payload.searchData))
                    break;
                case 'Date':
                    state.tableData = data.filter(item => item.date.slice(0, 10) === payload.searchData.replace(/Date/gi, ''))
                    break;
                default:
                    state.tableData = data.filter(item => {
                        return Object.values(item).some(value => {
                            return searchPattern.test(value.toString());
                        });
                    });
                    break;
            }
            state.searchState = true;
        },
        RESET_TABLE(state) {
            state.tableData = data
            state.searchState = false
        }
    },
    getters: {
        returnTableData(state) {
            return state.tableData
        },
        searchingState(state) {
            return state.searchState
        }
    }
})
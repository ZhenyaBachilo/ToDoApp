import { C } from '../constants/constants';

const initialState = C.SHOW_ALL;

export const FilterTasks = (state =initialState, action) => {
    switch(action.type){
        case C.SET_VISIBILITY_FILTER:
        return action.filter;

        default:
        return state;
    }
}
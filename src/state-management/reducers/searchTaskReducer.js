import {C} from '../constants/constants';

export const searchTaskReducer = (state='',action) => {
    switch(action.type){
        
        case C.SEARCH_TASK:
        return action.value;

        default:
        return state;
    }
}
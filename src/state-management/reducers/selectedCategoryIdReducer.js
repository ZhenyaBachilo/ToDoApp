import { C } from '../constants/constants';

const initialState = '';

export const selectedCategoryIdReducer = (state=initialState, action) =>{
    switch(action.type){

        case C.SELECTED_CATEGORY:
        return action.selectedCategoryId

        default:
         return state;
    }

}
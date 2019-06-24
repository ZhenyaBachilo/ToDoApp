import { C } from '../constants/constants';

const initialState = '';

export const selectedCategoryIdReducer = (state=null, action) =>{
    switch(action.type){

        case C.SELECTED_CATEGORY:
        return action.selectedCategoryId;

        case C.ADD_CATEGORY:
        return action.id


        default:
         return state;
    }

}
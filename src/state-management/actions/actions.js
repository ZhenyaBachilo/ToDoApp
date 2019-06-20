import { C } from '../constants/constants';
import uniqid from 'uniqid';

export const addCategoryAction  = (categoryName) => {
    return({
        type: C.ADD_CATEGORY,
        categoryName,
        id: uniqid(),
        tasks: [],
        filter: C.SHOW_ALL,
        selected: true
    });
}



export const ADD_TASK  = (text) => {
    return({
        type: ADD_TODO,
        text,
        id: uniqid(),
        completed: false
    });
}
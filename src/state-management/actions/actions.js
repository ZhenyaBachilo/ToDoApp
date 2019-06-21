import { C } from '../constants/constants';
import uniqid from 'uniqid';

export const addCategoryAction = categoryName => ({
    type: C.ADD_CATEGORY,
    categoryName,
    id: uniqid(),
    filter: C.SHOW_ALL,
    selected: true
});





export const addTaskAction = (text,categoryId) => {
    return({
        type: C.ADD_TASK,
        text,
        id: uniqid(),
        completed:'',
        selectedCategoryId: categoryId
    });
}

export const selectedCategoryId = (categoryId) => {
    return(
        {
            type: C.SELECTED_CATEGORY,
            selectedCategoryId: categoryId
        }
    );
}

export const toggleToDoComplete = (id)=>{
    return({
        type: C.TOGGLE_TODO,
        id
    })
}
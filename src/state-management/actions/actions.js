import { C } from '../constants/constants';
import uniqid from 'uniqid';

export const addCategoryAction = categoryName => ({
    type: C.ADD_CATEGORY,
    categoryName,
    id: uniqid()
    
});
    
export const addTaskAction = (text,categoryId) => {
    return({
        type: C.ADD_TASK,
        text,
        id: uniqid(),
        completed: false,
        selectedCategoryId: categoryId
    });
}


export const deleteCategory = id => {
    return({
        type: C.DELETE_CATEGORY,
        id
    })
}


export const deleteTask = id => {
    return({
        type: C.DELETE_TASK,
        id:id
    })
}

export const selectedCategoryId = (categoryId) => {
    return(
        {
            type: C.SELECTED_CATEGORY,
            selectedCategoryId: categoryId,
        }
    );
}

export const toggleToDoCompleteAction = (id)=>{
    return({
        type: C.TOGGLE_TODO,
        id:id
    })
}

export const setVisibilityFilter = (filter) =>{
    return {
        type: C.SET_VISIBILITY_FILTER,
        filter
    }
}

export const searchTask = (value) => {
    return{
        type: C.SEARCH_TASK,
        value
    }
}
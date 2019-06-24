import { C } from '../constants/constants';
import uniqid from 'uniqid';

export const addCategoryAction = categoryName => ({
    type: C.ADD_CATEGORY,
    categoryName,
    id: uniqid()
    
});

// export const ActivateCategoryAction = id =>({
//     type: C.ACTIVATE_CATEGORY,
//     id,
//     active: true
// })
    

export const addTaskAction = (text,categoryId) => {
    return({
        type: C.ADD_TASK,
        text,
        id: uniqid(),
        completed:'',
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
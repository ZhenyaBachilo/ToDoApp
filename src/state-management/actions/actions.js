import { C } from '../constants/constants';
import uniqid from 'uniqid';

export const addCategoryAction = categoryName => ({
    type: C.ADD_CATEGORY,
    categoryName,
    id: uniqid(),
    tasks: [],
    filter: C.SHOW_ALL,
    selected: true
});





export const addTaskAction = (text) => {
    return({
        type: C.ADD_TASK,
        text,
        id: uniqid(),
        completed: false
    });
}
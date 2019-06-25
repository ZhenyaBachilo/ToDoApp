import { combineReducers } from 'redux';
import { CategoriesReducer } from './CategoriesReducer';
import {TaskReducer } from './TaskReducer';
import {selectedCategoryIdReducer} from './selectedCategoryIdReducer';
import {FilterTasks} from './FilterTasks';

export const allReducers = combineReducers({
    CategoriesReducer, TaskReducer, selectedCategoryIdReducer, FilterTasks
})
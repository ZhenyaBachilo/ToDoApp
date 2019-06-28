import { combineReducers } from 'redux';
import { CategoriesReducer } from './CategoriesReducer';
import {TaskReducer } from './TaskReducer';
import {selectedCategoryIdReducer} from './selectedCategoryIdReducer';
import {FilterTasks} from './FilterTasks';
import {searchTaskReducer} from './searchTaskReducer';

export const allReducers = combineReducers({
    CategoriesReducer, TaskReducer, selectedCategoryIdReducer, FilterTasks, searchTaskReducer
})
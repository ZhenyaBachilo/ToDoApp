import { combineReducers } from 'redux';
import { CategoriesReducer } from './CategoriesReducer';
import {TaskReducer } from './TaskReducer';
import {selectedCategoryIdReducer} from './selectedCategoryIdReducer'

export const allReducers = combineReducers({
    CategoriesReducer, TaskReducer, selectedCategoryIdReducer
})
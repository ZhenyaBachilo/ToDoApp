import { combineReducers } from 'redux';
import { CategoriesReducer } from './CategoriesReducer';
import {TaskReducer } from './TaskReducer';

export const allReducers = combineReducers({
    CategoriesReducer, TaskReducer
})
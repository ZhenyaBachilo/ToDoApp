import React from 'react';
import Form from './Form';
import '../styles/ToDoBody.css';
import CategoryList from '../containers/CategoryList';


export function ToDoBody() {
    return(
        <div className='toDoBody'>
            <div className="categoryField">
                <Form/>
                <CategoryList/>
            </div>
            <div className='toDoListField'>
                <Form/>
            </div>
        </div>
    )  
}
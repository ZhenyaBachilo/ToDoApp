import React from 'react';
import {InputSearch} from './InputSearch';

export const SearchBar = (props) => {
    
    return (
        <>
            <div className='SearchBar'>
                <div>ToDoList</div>
                <InputSearch tasks={props.tasks} searchTask={props.searchTask}/>
            </div>
        </>
    )
}
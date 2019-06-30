import React from 'react';
import { InputSearch } from './InputSearch';


export const SearchBar = (props) => {
    return (
        <div className='searchBar'>
            <div className='appName'>To-Do List</div>
            <InputSearch
                tasks={props.tasks}
                searchTask={props.searchTask}
            />
        </div>
    )
}
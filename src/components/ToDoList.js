import React from 'react';
import {ToDoListItems} from './ToDoListItems';


export function ToDoList({tasks}){
        return(
            <ul>
                {tasks.map(task=><ToDoListItems key={task.id} task={task} />)}
            </ul>
        )  
}

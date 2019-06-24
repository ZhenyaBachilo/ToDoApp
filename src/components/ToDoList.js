import React from 'react';
import {ToDoListItems} from './ToDoListItems';




export function ToDoList({tasks,categoryId,toggleCompleteTask,deleteTask}){
   if(categoryId===null){
    return (
        <div> Please, create a category to add a task!</div>
    ) 
   }
    else if(categoryId===''){
        return (
            <div> Please, select a category to add a task!</div>
        )

    } else if(!tasks.filter(task=>task.selectedCategoryId===categoryId).length){
        return(
            <div> You can add a first task </div>
        )
    }
    return(
            <ul>
                {tasks.map(task=>task.selectedCategoryId?<ToDoListItems deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} categoryId={categoryId} key={task.id} task={task}/>:null)}
            </ul>
        )  
}

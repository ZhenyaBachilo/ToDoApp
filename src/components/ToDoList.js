import React from 'react';
import { ToDoListItems } from './ToDoListItems';
import { C } from '../state-management/constants/constants';

export function ToDoList({ tasks, categoryId, toggleCompleteTask, deleteTask, filter }) {

    const filterTasks = (tasks, filter) => {
        switch (filter) {
            case C.SHOW_COMPLETED:
                return tasks.filter(task => task.completed);

            case C.SHOW_ACTIVE:
                return tasks.filter(task => !task.completed);

            case C.SHOW_ALL:
                return tasks;
        }
    }

    const filteredTasks = filterTasks(tasks, filter);

    if ((!filteredTasks.filter(task => task.selectedCategoryId === categoryId).length) && (filter === C.SHOW_ACTIVE)) {
        return (
            <div> There is no Active tasks in this Category. You can add the first one.</div>
        )
    } else if ((!filteredTasks.filter(task => task.selectedCategoryId === categoryId).length) && (filter === C.SHOW_COMPLETED)) {
        return (
            <div> There is no completed tasks in this Category </div>
        )
    } else if (!filteredTasks.filter(task => task.selectedCategoryId === categoryId).length) {
        return (
            <div> You can add a first task </div>
        )
    }

    return (

        <ul>
            {filteredTasks.map(task => task.selectedCategoryId ? <ToDoListItems deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} categoryId={categoryId} key={task.id} task={task} /> : null)}
        </ul>
    )
}

import React from 'react';
import { ToDoListItems } from './ToDoListItems';
import { C } from '../state-management/constants/constants';
import { ListGroup } from 'react-bootstrap';

export function ToDoList({ tasks, categoryId, toggleCompleteTask, deleteTask, filter, searchedText, selectedCategoryIdAction }) {

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

    const searchTasks = (tasks, searchedText) => {
        if (!searchedText.trim()) {
            return filterTasks(tasks, filter);

        } else
            return tasks.filter((task) => task.text.toLowerCase().includes(searchedText.toLowerCase()));
    }

    const newT = searchTasks(tasks, searchedText);
    return (
        <ListGroup as='ul'>
            {newT.map(task =>
                <ToDoListItems
                    deleteTask={deleteTask}
                    toggleCompleteTask={toggleCompleteTask}
                    categoryId={categoryId}
                    key={task.id} task={task}
                    searchedText={searchedText}
                    selectedCategoryIdAction={selectedCategoryIdAction}

                />
            )}
        </ListGroup>
    )
}

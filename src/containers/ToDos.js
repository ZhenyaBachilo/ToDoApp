import React from 'react';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { addTaskAction } from '../state-management/actions/actions';
import { toggleToDoCompleteAction } from '../state-management/actions/actions';
import { deleteTask } from '../state-management/actions/actions';
import { ToDoList } from '../components/ToDoList';
import { selectedCategoryId } from '../state-management/actions/actions';


function ToDos(props) {
    if (props.categoryId === null) {
        return (
            <div className='toDosField'> <div className='notification'>Please, create a category to add a task!</div></div>
        )
    } else if (props.categoryId === '' && props.searchedText) {
        return (
            <div className='toDosField'>
                <Form categoryId={props.categoryId} headerText={'Add new Task'} addTask={props.addTask} />
                <ToDoList
                    categoryId={props.categoryId}
                    tasks={props.tasks}
                    toggleCompleteTask={props.toggleCompleteTask}
                    deleteTask={props.deleteTask}
                    filter={props.filter}
                    searchedText={props.searchedText}
                    selectedCategoryIdAction={props.selectedCategoryIdAction}
                />
            </div>
        )
    }
    else if (props.categoryId === '') {
        return (
            <div className='toDosField'> <div className='notification'>Please, select a category!</div></div>
        )
    }
    return (
        <div className='toDosField'>
            <Form
                categoryId={props.categoryId}
                addTask={props.addTask}
                inputPlaceholder={'Add new Task'}
            />
            <ToDoList
                categoryId={props.categoryId}
                tasks={props.tasks}
                toggleCompleteTask={props.toggleCompleteTask}
                deleteTask={props.deleteTask}
                filter={props.filter}
                searchedText={props.searchedText}
                selectedCategoryIdAction={props.selectedCategoryIdAction}
            />
        </div>
    )
}
const mapDispatchToProps = {
    addTask: addTaskAction,
    toggleCompleteTask: toggleToDoCompleteAction,
    deleteTask: deleteTask,
    selectedCategoryIdAction: selectedCategoryId

}
const mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer,
        categoryId: state.selectedCategoryIdReducer,
        filter: state.FilterTasks,
        searchedText: state.searchTaskReducer
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps
)(ToDos);


import React from 'react';
import Form from '../components/Form';
import {connect} from 'react-redux';
import {addTaskAction} from '../state-management/actions/actions';
import {toggleToDoCompleteAction} from '../state-management/actions/actions';
import {deleteTask} from '../state-management/actions/actions';
import {ToDoList} from '../components/ToDoList';


function ToDos(props) {
    return(
        <div className='toDosField'>
            <Form categoryId={props.categoryId} headerText={'Add new Task'} addTask={props.addTask}/>
            <ToDoList 
            categoryId={props.categoryId} 
            tasks={props.tasks} 
            toggleCompleteTask={props.toggleCompleteTask}
            deleteTask={props.deleteTask}
            />
        </div>
    )
}
const mapDispatchToProps = {
    addTask: addTaskAction,
    toggleCompleteTask:toggleToDoCompleteAction,
    deleteTask:deleteTask
}
const mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer,
        categoryId: state.selectedCategoryIdReducer
    }
}

export default connect(mapStateToProps,
mapDispatchToProps
)(ToDos);


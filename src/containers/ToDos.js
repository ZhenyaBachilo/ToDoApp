import React from 'react';
import Form from '../components/Form';
import {connect} from 'react-redux';
import {addTaskAction} from '../state-management/actions/actions';
import {ToDoList} from '../components/ToDoList';


function ToDos(props) {
    return(
        <div className='toDosField'>
            <Form categoryId={props.categoryId} headerText={'Add new Task'} add={props.addTask}/>
            <ToDoList tasks={props.tasks}/>
        </div>
    )
}
const mapDispatchToProps = {
    addTask: addTaskAction
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


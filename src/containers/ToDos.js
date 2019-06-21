import React from 'react';
import Form from '../components/Form';
import {List} from '../components/List';
import {connect} from 'react-redux';
import {addTaskAction} from '../state-management/actions/actions'


function ToDos(props) {
    return(
        <div className='toDosField'>
            <Form headerText={'Add new Task'} add={props.addTask}/>
        </div>
    )
}
const mapDispatchToProps = {
    addTask: addTaskAction
}
const mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer
    }
}

export default connect(mapStateToProps,
mapDispatchToProps
)(ToDos);


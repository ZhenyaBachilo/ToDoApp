import React from 'react';

export class ToDoListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleClass = () => {

        this.props.toggleCompleteTask(this.props.task.id);
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    }

    render() {
        if (this.props.task.selectedCategoryId === this.props.categoryId) {
            return (
                <li onClick={this.toggleClass}>
                    <span className={this.props.task.completed ? "completedTask" : "task"}>
                        {this.props.task.text}
                    </span>
                    <button onClick={this.deleteTask}>
                        delete
                    </button>
                </li>
            )
        }
        return null;
    }
}

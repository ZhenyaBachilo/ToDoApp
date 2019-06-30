import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

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
        if (this.props.searchedText.trim()) {
            this.props.selectedCategoryIdAction('');
            return (
                <ListGroup.Item as='li'
                    variant="light"
                    onClick={this.toggleClass}>
                    <span className={this.props.task.completed ? "completedTask" : "task"}>
                        {this.props.task.text}
                    </span>
                    <Badge pill
                        variant="info"
                        onClick={this.deleteTask}>
                        delete
                    </Badge>
                </ListGroup.Item>
            )

        }

        else if (this.props.task.selectedCategoryId === this.props.categoryId) {
            return (
                <ListGroup.Item as='li'
                    variant="light"
                    className='listItems'
                    onClick={this.toggleClass}>
                    <span className={this.props.task.completed ? "completedTask" : "task"}>
                        {this.props.task.text}
                    </span>
                    <Badge pill
                        className='deleteButton'
                        variant="info"
                        onClick={this.deleteTask}
                    >
                        delete
                    </Badge>
                </ListGroup.Item >
            )
        }
        return null;
    }
}

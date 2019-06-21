import React from 'react';


export class ToDoListItems extends React.Component {
    
    render(){
        return(  
            <li>{this.props.task.text}</li>
        )
    }
}

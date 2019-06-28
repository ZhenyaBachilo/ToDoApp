import React from 'react';

export class InputSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:""
        }
    }

    handleChange = (event) => {
        this.setState(
            {value:event.target.value}
        )
    }
    
    render() {
        this.props.searchTask(this.state.value);

        return (
            <input type='text'
                placeholder='Search Task'
                onChange={this.handleChange}
                value={this.state.value}
            >
            </input>
        )
    }

}
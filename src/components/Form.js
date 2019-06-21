import React from 'react';


export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState(
            {value:event.target.value}
        )
    }

    handleSubmit = (event)=> {
        event.preventDefault();

        if(!this.state.value.trim()) {
            this.setState({
                value:''
            });
            return;
        }
        this.props.add(this.state.value, this.props.categoryId );
        this.setState({
            value:''
        })
    }

    render(){
        return(
            <form onSubmit ={this.handleSubmit}>
                <label><span>{this.props.headerText}</span>
                    <input type='text' onChange={this.handleChange} value={this.state.value}></input>
                </label>
                <button>Add</button>
            </form>
        )
    }
}


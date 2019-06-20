import React from 'react';
import {connect} from 'react-redux';
import {addCategoryAction} from '../state-management/actions/actions'


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // не получается сделать стрелочными!!!
    }

    handleChange(event){
        this.setState(
            {value:event.target.value}
        )
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addCategoryAction(this.state.value);
        this.setState({
            value:''
        })
    }

    render(){
        return(
            <form onSubmit ={this.handleSubmit}>
                <label>Add new Category
                    <input type='text' onChange={this.handleChange} value={this.state.value}></input>
                </label>
                <button>Add</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
            addCategoryAction:addCategoryAction
}



export default connect(null,
    mapDispatchToProps
    )(Form);
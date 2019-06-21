import React from 'react';


export class CategoryListItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            key:this.props.category.id
        }
    }


    handleClick = (event) => {

        this.setState({
            key: this.props.category.id
        })
        this.props.selectedCategoryId(this.state.key);
        
    }

    render(){
        return(  
            <li onClick={this.handleClick}>{this.props.category.categoryName}</li>
        )
    }
}



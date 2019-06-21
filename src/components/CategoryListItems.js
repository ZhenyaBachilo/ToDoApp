import React from 'react';


export class CategoryListItems extends React.Component {
    
    render(){
        return(  
            <li>{this.props.category.categoryName}</li>
        )
    }
}



import React from 'react';


export class CategoryListItems extends React.Component {
    
    render(){
        console.log(this.props);
        return(  
            <li>{this.props.category.categoryName}</li>
        )
    }
}



import React from 'react';


export class ListItems extends React.Component {
    
    render(){
        return(  
            <li>{this.props.category.categoryName}</li>
        )
    }
}



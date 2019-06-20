import React from 'react';
import {connect} from 'react-redux';
import {CategoryListItems} from './CategoryListItems';


export class CategoryList extends React.Component {
    render(){
        console.log(this.props);
        return(
            <ul>
                {this.props.category.map(category=> <CategoryListItems key={category.id} category={category} />)}
            </ul>
        )
    }
}

const  mapStateToProps = (state) => {
    
    return {   
        category:state.addCategoryReducer   
    }
}
export default connect(mapStateToProps)(CategoryList);
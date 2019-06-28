import React from 'react';


export class CategoryListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    handleClick = (event) => {
        if (this.props.selectedCategory === this.props.category.id) {
            return this.props.selectedCategoryId("");
        }
        this.props.searchTaskText('');
        this.props.selectedCategoryId(this.props.category.id); 
    }

    deleteCategory = () => {
        this.props.deleteCategory(this.props.category.id);
    }

    render() {
        return (
            <li
                onClick={this.handleClick}
                className={this.props.selectedCategory === this.props.category.id ? 'activeCategoryItem' : 'categoryItem'}

            >
                <span>{this.props.category.categoryName}</span>
                <button onClick={this.deleteCategory}>delete</button>
            </li>
        )
    }
}



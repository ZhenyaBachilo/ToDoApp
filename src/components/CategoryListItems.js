import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';


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
            <ListGroup.Item as='li'
                onClick={this.handleClick}
                className={this.props.selectedCategory === this.props.category.id ? 'activeCategoryItem listItems' : 'categoryItem listItems'}
                variant="light"

            >
                <span>{this.props.category.categoryName}</span>
                <Badge
                    pill
                    className='deleteButton'
                    variant="info"
                    onClick={this.deleteCategory}
                >
                    delete
                </Badge>
            </ListGroup.Item>
        )
    }
}



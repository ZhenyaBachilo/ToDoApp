import React from 'react';
import { CategoryListItems } from './CategoryListItems';
import { ListGroup } from 'react-bootstrap';


export function CategoryList({ categories, selectedCategoryId, selectedCategory, deleteCategory, searchTaskText }) {
    return (
        <ListGroup as='ul'>
            {categories.map(category =>
                <CategoryListItems
                    key={category.id}
                    selectedCategory={selectedCategory}
                    category={category}
                    selectedCategoryId={selectedCategoryId}
                    deleteCategory={deleteCategory}
                    searchTaskText={searchTaskText}
                />)}
        </ListGroup>
    )
}


import React from 'react';
import { CategoryListItems } from './CategoryListItems';


export function CategoryList({ categories, selectedCategoryId, selectedCategory,deleteCategory,searchTaskText}) {
    return (
        <ul>
            {categories.map(category =>
                <CategoryListItems
                    key={category.id}
                    selectedCategory={selectedCategory}
                    category={category}
                    selectedCategoryId={selectedCategoryId}
                    deleteCategory={deleteCategory}
                    searchTaskText={searchTaskText}
                />)}
        </ul>
    )
}


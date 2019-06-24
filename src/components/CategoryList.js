import React from 'react';
import { CategoryListItems } from './CategoryListItems';


export function CategoryList({ categories, selectedCategoryId, selectedCategory,deleteCategory }) {
    return (
        <ul>
            {categories.map(category =>
                <CategoryListItems
                    key={category.id}
                    selectedCategory={selectedCategory}
                    category={category}
                    selectedCategoryId={selectedCategoryId}
                    deleteCategory={deleteCategory}
                />)}
        </ul>
    )
}


import React from 'react';
import {CategoryListItems} from './CategoryListItems';


export function CategoryList({categories,selectedCategoryId}){
        return(
            <ul>
                {categories.map(category=><CategoryListItems key={category.id} category={category} selectedCategoryId={selectedCategoryId} />)}
            </ul>
        )  
}


import React from 'react';
import {CategoryListItems} from './CategoryListItems';


export function CategoryList({categories}){
        return(
            <ul>
                {categories.map(category=><CategoryListItems key={category.id} category={category} />)}
            </ul>
        )  
}


import React from 'react';
import {ListItems} from './ListItems';


export function List({categories}){
        return(
            <ul>
                {categories.map(category=><ListItems key={category.id} category={category} />)}
            </ul>
        )  
}


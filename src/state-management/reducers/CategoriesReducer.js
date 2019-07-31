import { C } from '../constants/constants';


const initialState = [];

export const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.ADD_CATEGORY:
            return ([...state,

                {
                categoryName: action.categoryName,
                id: action.id
                }
            ]
            )
        case C.DELETE_CATEGORY:
            return state.filter((category)=>{
                if(!(category.id===action.id)){
                    return  category;
                }
            })

        default:
            return state;
    }

}

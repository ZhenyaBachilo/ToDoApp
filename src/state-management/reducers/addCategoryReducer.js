import { C } from '../constants/constants';


const initialState = [];

export const addCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.ADD_CATEGORY:
            return ([...state,

                {
                categoryName: action.categoryName,
                id: action.id,
                tasks: [],
                filter: action.filter,
                selected: action.selected
                }
            ]
            )

        default:
            return state;
    }

}

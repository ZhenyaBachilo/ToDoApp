import { C } from '../constants/constants';


export const TaskReducer = (state = [], action) => {
    switch (action.type) {
        case C.ADD_TASK:
            return ([...state,
            {
                text: action.text,
                id: action.id,
                completed: false,
                selectedCategoryId: action.selectedCategoryId
            }
            ])
        case C.TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return ({
                        ...todo,
                        completed: !todo.completed
                    }
                    )
                }
                return todo;
            })

        case C.DELETE_TASK:
            return state.filter((todo) => {
                if (!(todo.id === action.id)) {
                    return todo;
                }
            });

        case C.DELETE_CATEGORY:
            return state.filter((todo) => {
                if (!(todo.selectedCategoryId === action.id)) {
                    return todo;
                }
            });


        default:
            return state
    }
}
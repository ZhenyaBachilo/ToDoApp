import {C} from '../constants/constants';


export const TaskReducer = (state = [], action) => {
    switch (action.type) {
        case C.ADD_TASK:
            return ([...state,
            {
                text: action.text,
                id: action.id,
                completed: action.completed,
                
            }
            ])
            
        default:
            return state
    }
}
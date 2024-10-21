import { ADD_TODO } from "../actions";

export default function todoListReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            // add a TODO task
            const newTodo = {
                text: action.text,
            };

            // creating a new array of TODOs
            return [...state, newTodo];
        default:
            return state;
    }
}
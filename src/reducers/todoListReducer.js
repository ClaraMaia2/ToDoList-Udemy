import { ADD_TODO, TOGGLE_TODO } from "../actions";

let nextId = 1;

export default function todoListReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false,
            };

            return [...state, newTodo];
        case TOGGLE_TODO:
            action.id;

            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, done: !todo.done };
                }

                return todo;
            });
        default:
            return state;
    }
}
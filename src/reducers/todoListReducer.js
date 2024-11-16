import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO } from "../actions";

let nextId = 1;
/* 
The `todoListReducer` function is a JavaScript function that serves as a reducer for managing the state of a todo list. It takes two parameters: `state` and `action`. The `state` parameter represents the current state of the todo list, while the `action` parameter represents the action to be performed on the todo list.

The function uses a switch statement to handle different types of actions. The `ADD_TODO` case adds a new todo item to the state by creating a new todo object and appending it to the existing state array. The `UPDATE_TODO` case updates an existing todo item in the state by mapping over the state array and replacing the todo object with the updated todo object. The `TOGGLE_TODO` case toggles the `done` property of a todo item in the state by mapping over the state array and updating the `done` property of the matching todo object.

If none of the cases match, the function returns the current state unchanged.
*/

export default function todoListReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false,
            };

            return [...state, newTodo];
        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    return action.todo;
                }

                return todo;
            });
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
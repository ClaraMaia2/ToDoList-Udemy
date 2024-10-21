import { combineReducers } from "@reduxjs/toolkit";

import todoListReducer from "./todoListReducer";

export default rootReducer = combineReducers({
    todos: todoListReducer,
});


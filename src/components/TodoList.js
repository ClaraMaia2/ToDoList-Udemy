import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { toggleTodo, setEditingTodo } from "../actions";

import TodoListItem from "./TodoListItem";

/**
 * Renders a TodoList component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.todos - The array of todos.
 * @param {Function} props.dispatchToggleTodo - The function to toggle a todo.
 * @param {Function} props.dispatchSetEditingTodo - The function to set the editing todo.
 * @returns {JSX.Element} The rendered TodoList component.
 */
function TodoList({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) {
    return (
        <View>
            {todos.map(todo => <TodoListItem
                key={todo.id}
                todo={todo}
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)} />)}
        </View>
    );
}

const mapStateToProps = (state) => {
    const { todos } = state;

    return { todos };
}

export default connect(mapStateToProps, { 
    dispatchToggleTodo: toggleTodo,
    dispatchSetEditingTodo: setEditingTodo,
})(TodoList);
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Renders a single todo item in a list.
 * 
 * @param {object} props - The props object containing todo, onPressTodo, and onLongPressTodo.
 * @param {object} props.todo - The todo object containing text and done properties.
 * @param {function} props.onPressTodo - The function to be called when the todo item is pressed.
 * @param {function} props.onLongPressTodo - The function to be called when the todo item is long pressed.
 * @returns {JSX.Element} A TouchableOpacity component with a View and Text component inside.
 */
function TodoListItem({ todo, onPressTodo, onLongPressTodo }) {
    return (
        <TouchableOpacity onPress={ onPressTodo } onLongPress={ onLongPressTodo }>
            <View style={ styles.line }>
                <Text style={ [ styles.lineText, todo.done ? styles.lineThrough : null ] }>{ todo.text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 50,
        width: "80%",
        padding: 5,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: "10%",
    },
    lineText: {
        fontSize: 14,
        paddingLeft: 10,
        flex: 7,
    },
    lineThrough: {
        textDecorationLine: 'line-through',
    }
});

export default TodoListItem;
import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { setTodoText, addTodo, updateTodo } from "../actions";

import Input from "./Input";
import ButtonComponent from "./ButtonComponent";

/* React component for rendering a form to add or update a todo item. The form includes an input field for entering the todo text and a button for submitting the form. The `TodoForm` class has three methods: `onChangeText`, `onPress`, and `render`. The `onChangeText` method is called when the text in the input field changes and dispatches an action to update the todo text. The `onPress` method is called when the button is pressed and dispatches either an action to update an existing todo item or add a new todo item, depending on whether the todo item has an `id` property. The `render` method renders the form, including the input field and the button. 
*/
class TodoForm extends React.Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  onPress() {
    const { todo } = this.props;
    if (todo.id) {
      return this.props.dispatchUpdateTodo(todo);
    }

    const { text } = todo;
    this.props.dispatchAddTodo(text);
  }

  render() {
    const { text } = this.props.todo;
    return (
      <View style={ styles.formContainer }>
        <View style={ styles.inputContainer }>
          <Input
            onChangeText={(text) => this.onChangeText(text)}
            value={ text }
          />
        </View>
        <View style={ styles.buttonContainer }>
          <ButtonComponent
            onPress={ () => this.onPress() }
            todo={ this.props.todo }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 30,
    flexDirection: "row",
  },
  inputContainer: {
    flex: 4,
    paddingLeft: 5,
  },
  buttonContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    todo: state.editingTodo,
  };
};

export default connect(mapStateToProps, {
  dispatchSetTodoText: setTodoText,
  dispatchAddTodo: addTodo,
  dispatchUpdateTodo: updateTodo,
})(TodoForm);
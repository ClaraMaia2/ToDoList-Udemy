import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Input from "./Input";
import ButtonComponent from "./ButtonComponent";
import { addTodo } from "../actions";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onChangeText(text) {
        this.setState({ text });
    }

    render() {
        const { text } = this.state;
        const { dispatchAddTodo } = this.props;

        return (
            <View style={ styles.formContainer }>
                <View style={ styles.inputContainer }>
                    <Input onChangeText={text => this.onChangeText(text)} value={text} />
                </View>
                <View style={ styles.buttonContainer }>
                    <ButtonComponent 
                        text={ text } 
                        onPress={() => {
                            dispatchAddTodo(text); 
                            this.setState({ text: "" });
                        }} // Passa a função de dispatch
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
        paddingRight: 5,
        paddingLeft: 5,
    },
});

export default connect(null, {dispatchAddTodo: addTodo})(TodoForm);

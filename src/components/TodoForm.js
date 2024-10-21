import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Input from "./Input";
import ButtonComponent from "./ButtonComponent";

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }

    onChangeText(text) {
        this.setState({
            text
        });
    }

    render() {
        const { text } = this.state;

        return (
            <View style={ styles.formContainer }>
                <View style={ styles.inputContainer }>
                    <Input onChangeText={text => this.onChangeText(text)} value={ text } />
                </View>
                <View style={ styles.buttonContainer }>
                    <ButtonComponent text={ text } />
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
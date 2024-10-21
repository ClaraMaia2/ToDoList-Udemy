import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ButtonComponent extends React.Component {
    onPress() {
        const { text } = this.props;  // Acessa o text vindo do TodoForm via props
        console.log(text);  // Mostra o text no console
    }

    render() {
        return (
            <TouchableOpacity style={ styles.button } onPress={() => this.onPress()}>
                <Text style={ styles.buttonText }>ADD</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
        borderRadius: 5,
        height: 30,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
    }
})
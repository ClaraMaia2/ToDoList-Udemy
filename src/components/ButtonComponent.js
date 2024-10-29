import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class ButtonComponent extends React.Component {
    render() {
        const { onPress } = this.props;

        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>ADD</Text>
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
});

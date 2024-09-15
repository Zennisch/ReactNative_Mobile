import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ title, onPress = () => {} }) {
    return (
        <TouchableOpacity style={styles.button} onClick={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#E3C000",
        color: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 15,
        fontSize: 16,
        borderRadius: 5,
    },
});

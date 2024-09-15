import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/Button";

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.textView}>
                <TextInput style={styles.textInput} placeholder="Email" />
                <TextInput style={styles.textInput} placeholder="Password" />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View>
                <Text>When you agree to term and condition</Text>
                <Text>Forgot your password?</Text>
                <Text>Or login with</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#d8efdf",
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    textView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        width: "100%",
    },
    textInput: {
        width: "80%",
        height: 40,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#cae1d1",
    },
    button: {
        width: "80%",
        height: 40,
        backgroundColor: "#c34e3b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
});

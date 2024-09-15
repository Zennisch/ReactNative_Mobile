import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Button from "../components/Button";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/my_assets/circle.png")} />
            <Text style={[styles.title, styles.centerText]}>
                {"GROW YOUR BUSSINESS"}
            </Text>
            <Text style={styles.centerText}>
                {
                    "We will help you to grow your online business using\nonline server"
                }
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="Login" />
                <Button title="Sign Up" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#00ccf9",
        justifyContent: "center",
        alignItems: "center",
        gap: 70,
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    centerText: {
        textAlign: "center",
    },
});

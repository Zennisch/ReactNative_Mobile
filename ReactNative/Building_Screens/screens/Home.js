import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/my_assets/circle.png")} />
            <Text style={styles.title}>{"GROW YOUR BUSSINESS"}</Text>
            <Text style={{ textAlign: "center" }}>
                {
                    "We will help you to grow your online business using\nonline server"
                }
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#00ccf9",
        alignItems: "center",
        gap: 70,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import RouteBuilder from "./screens/Router";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <RouteBuilder />
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

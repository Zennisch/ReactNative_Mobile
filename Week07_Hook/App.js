import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import UseStateNone from "./screens/UseStateNone";
import UseStateEmpty from "./screens/UseStateEmpty";
import UseStateCallback from "./screens/UseStateCallback";

export default function App() {
    return (
        <ScrollView>
            <UseStateNone/>
            <UseStateEmpty/>
            <UseStateCallback/>
        </ScrollView>
    );
}


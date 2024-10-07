import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import UseStateNone from "./screens/UseStateNone";
import UseStateEmpty from "./screens/UseStateEmpty";
import UseStateCallback from "./screens/UseStateCallback";
import UseEffectCallback from "./screens/UseEffectCallback";
import UseEffectCallbackEmpty from "./screens/UseEffectCallbackEmpty";

export default function App() {
    return (
        <ScrollView>
            <UseStateNone/>
            <UseStateEmpty/>
            <UseStateCallback/>
            <UseEffectCallback/>
            <UseEffectCallbackEmpty/>
        </ScrollView>
    );
}

import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import UseStateNone from "./screens/UseStateNone";
import UseStateEmpty from "./screens/UseStateEmpty";
import UseStateCallback from "./screens/UseStateCallback";
import UseEffectCallback from "./screens/UseEffectCallback";
import UseEffectCallbackEmpty from "./screens/UseEffectCallbackEmpty";
import UseEffectCallbackDeps from "./screens/UseEffectCallbackDeps";

export default function App() {
    return (
        <ScrollView style={{marginTop: 12}}>
            <Text style={{textAlign: "center", fontSize: 20}}>useState(value)</Text>
            <UseStateNone/>

            <Text style={{textAlign: "center", fontSize: 20}}>useState(array)</Text>
            <UseStateEmpty/>

            <Text style={{textAlign: "center", fontSize: 20}}>useState(callback)</Text>
            <UseStateCallback/>

            <Text style={{textAlign: "center", fontSize: 20}}>useEffect(callback)</Text>
            <UseEffectCallback/>

            <Text style={{textAlign: "center", fontSize: 20}}>useEffect(callback, [])</Text>
            <UseEffectCallbackEmpty/>

            <Text style={{textAlign: "center", fontSize: 20}}>useEffect(callback, [deps])</Text>
            <UseEffectCallbackDeps/>
        </ScrollView>
    );
}

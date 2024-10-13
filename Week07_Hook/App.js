import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import UseStateValue from "./screens/UseStateValue";
import UseStateArray from "./screens/UseStateArray";
import UseStateCallback from "./screens/UseStateCallback";
import UseEffectCallback from "./screens/UseEffectCallback";
import UseEffectCallbackEmpty from "./screens/UseEffectCallbackEmpty";
import UseEffectCallbackDeps from "./screens/UseEffectCallbackDeps";
import UseRefAccessDom from "./screens/UseRefAccessDom";
import UseRefStoreMutable from "./screens/UseRefStoreMutable";

export default function App() {
    return (
        <ScrollView style={{marginTop: 12}}>
            <Text style={{textAlign: "center", fontSize: 20}}>useState(value)</Text>
            <UseStateValue/>

            <Text style={{textAlign: "center", fontSize: 20}}>useState(array)</Text>
            <UseStateArray/>

            <Text style={{textAlign: "center", fontSize: 20}}>useState(callback)</Text>
            <UseStateCallback/>

            <Text style={{textAlign: "center", fontSize: 20}}>useEffect(callback)</Text>
            <UseEffectCallback/>

            <Text style={{textAlign: "center", fontSize: 20}}>useEffect(callback, [])</Text>
            <UseEffectCallbackEmpty/>

            <Text style={{textAlign: "center", fontSize: 20}}>useEffect(callback, [deps])</Text>
            <UseEffectCallbackDeps/>

            <Text style={{textAlign: "center", fontSize: 20}}>useRef to access DOM</Text>
            <UseRefAccessDom/>

            <Text style={{textAlign: "center", fontSize: 20}}>useRef to store mutable value</Text>
            <UseRefStoreMutable/>
        </ScrollView>
    );
}

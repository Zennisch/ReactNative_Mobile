import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import HomeScreen_A from "./screens/HomeScreen_A";
import ForgetScreen from "./screens/ForgetScreen";
import CodeScreen from "./screens/CodeScreen";
import HomeScreen_D from "./screens/HomeScreen_D";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import {StyleSheet} from "react-native";
import LoginScreen_Eye from "./screens/LoginScreen_Eye";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name={"HomeScreen"} component={HomeScreen}/>*/}
                {/*<Stack.Screen name={"HomeScreen_A"} component={HomeScreen_A}/>*/}
                {/*<Stack.Screen name={"ForgetScreen"} component={ForgetScreen}/>*/}
                {/*<Stack.Screen name={"CodeScreen"} component={CodeScreen}/>*/}
                {/*<Stack.Screen name={"HomeScreen_D"} component={HomeScreen_D}/>*/}
                {/*<Stack.Screen name={"RegisterScreen"} component={RegisterScreen}/>*/}
                {/*<Stack.Screen name={"LoginScreen"} component={LoginScreen}/>*/}
                <Stack.Screen name={"LoginScreen_Eye"} component={LoginScreen_Eye}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import HomeScreen_A from "./screens/HomeScreen_A";
import ForgetScreen from "./screens/ForgetScreen";
import CodeScreen from "./screens/CodeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name={"HomeScreen"} component={HomeScreen}/>*/}
                {/*<Stack.Screen name={"HomeScreen_A"} component={HomeScreen_A}/>*/}
                {/*<Stack.Screen name={"ForgetScreen"} component={ForgetScreen}/>*/}
                <Stack.Screen name={"CodeScreen"} component={CodeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TaskScreen from "./screens/TaskScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
                <Stack.Screen name={"ProfileScreen"} component={ProfileScreen}/>
                <Stack.Screen name={"TaskScreen"} component={TaskScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

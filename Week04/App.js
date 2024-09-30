import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import BookScreen from "./screens/BookScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"BookScreen"} component={BookScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

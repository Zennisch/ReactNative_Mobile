import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import BookScreen from "./screens/BookScreen";
import PasswordScreen from "./screens/PasswordScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*Comment a screen and reload the app to see the other screen*/}
                <Stack.Screen name={"BookScreen"} component={BookScreen} />
                <Stack.Screen name={"PasswordScreen"} component={PasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

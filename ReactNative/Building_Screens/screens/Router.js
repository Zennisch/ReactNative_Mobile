import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Home";

const Stack = createNativeStackNavigator();
export default function RouteBuilder() {
    return (
        <Stack.Navigator
            initialRouteName={"HomeScreen"}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen key={1} name={"HomeScreen"} component={HomeScreen} />
        </Stack.Navigator>
    );
}

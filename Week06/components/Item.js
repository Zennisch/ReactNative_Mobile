import {Text, View} from "react-native";
import s from "../styles/MyStyles";

export default function Item({item}) {
    return (
        <View style={[s.flex, s.flexRow, s.alignCenter, s.justifyStart, {height: 200}]}>
            <View style={[s.w20, s.h100, s.bgRed]}>
                <Text>{item.name}</Text>
            </View>
            <View style={[s.w60, s.h100, s.bgBlue]}>
                <Text>{item.distributor}</Text>
            </View>
            <View style={[s.w20, s.h100, s.bgGreen]}>
                <Text>{item.image}</Text>
            </View>
        </View>
    )
}

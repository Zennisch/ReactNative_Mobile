import {Image, Text, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "./Button";

export default function Item({item}) {
    return (
        <View style={[s.flex, s.flexRow, s.alignCenter, s.justifyStart, {height: 100}]}>
            <View style={[s.w20, s.h100, s.justifyStart_alignCenter]}>
                <Image source={item.image} style={[s.w90, s.h90]} />
            </View>
            <View style={[s.w60, s.h100]}>
                <Text>{item.name}</Text>
                <Text>{item.distributor}</Text>
            </View>
            <View style={[s.w20, s.h100, s.justifyCenter_alignCenter]}>
                <Button title={"Chat"}
                        styleButton={[s.bgRed, s.w90, s.h50, s.justifyCenter_alignCenter]}
                        styleText={[s.textWhite]}
                />
            </View>
        </View>
    )
}

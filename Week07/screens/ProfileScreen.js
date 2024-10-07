import {Image, SafeAreaView, Text, TextInput, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function ProfileScreen() {

    let username = "John Doe";

    return (
        <SafeAreaView style={[s.flex, s.flexColumn, s.w100, s.alignCenter, s.bgWhite]}>
            <View style={[s.h10, s.w90, s.flexRow, s.justifyBetween, s.alignCenter]}>
                <Button title={"←"}
                        styleText={[s.textSize36, s.lineHeight36]}
                />
                <View style={[s.flexRow, s.w50, s.justifyBetween]}>
                    <View>
                        <Image source={require("../myassets/avatar.png")}
                               style={[s.w30, s.aspectRatio1, {backgroundColor: "#D9CBF6", borderRadius: 25}]}
                               resizeMode={"contain"}
                        />
                    </View>
                    <View style={[s.flexColumn]}>
                        <Text style={[s.textCenter, s.textBold, s.textSize18]}>{"Hi " + username}</Text>
                        <Text style={[s.textCenter, s.textBold, s.textGray]}>{"Have a great day ahead"}</Text>
                    </View>
                </View>
            </View>
            <View style={[s.h10, s.justifyCenter, s.w90]}>
                <View style={[{borderWidth: 1, borderColor: "gray", borderRadius: 10}, s.flexRow, s.p6, s.alignCenter, s.justifyEvenly]}>
                    <View style={[s.justifyCenter_alignCenter]}>
                        <Image source={require("../myassets/search.png")}
                               style={[s.w5, s.aspectRatio1]}
                               resizeMode={"contain"}
                        />
                    </View>
                    <TextInput placeholder={"Search"}
                               style={[s.w90, s.textBlack]}
                               placeholderTextColor={"black"}
                    />
                </View>

            </View>
            <View style={[s.h50]}></View>
            <View style={[s.h30]}>
                <Button title={"+"}
                        styleButton={[{backgroundColor: "#00BDD6", borderRadius: 35}, s.justifyCenter_alignCenter, s.w15, s.aspectRatio1]}
                        styleText={[s.textWhite, s.textSize42, s.lineHeight48]}
                />
            </View>
        </SafeAreaView>
    )
}
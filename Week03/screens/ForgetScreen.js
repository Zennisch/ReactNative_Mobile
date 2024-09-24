import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function ForgetScreen() {
    return (
        <SafeAreaView style={[s.flex]}>
            <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
                            locations={[0, 0.3, 0.8, 0.9, 1]}>
                <View style={[s.h30, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/Lock.png")}/>
                </View>
                <View style={[s.h20, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textCenter, styles.fontSize_30, styles.fontBold]}>{"FORGET\nPASSWORD"}</Text>
                </View>
                <View style={[s.h10, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textCenter, styles.fontSize_20, styles.fontBold]}>{"Provide your account's email for which you\n"
                        + "want to reset your password"}</Text>
                </View>
                <View style={[s.h10, s.justifyCenter_alignCenter, s.flexRow]}>
                    <View style={[s.h80, styles.input, s.justifyCenter_alignCenter]}>
                        <Image source={require("../myassets/Mail.png")}
                               style={[s.h80, s.aspectRatio_1, styles.input]}
                        />
                    </View>
                    <TextInput style={[styles.fontSize_20, s.w80, s.h80, styles.pl_10, styles.input]}
                               placeholder={"Email"}
                    />
                </View>
                <View style={[s.h30, s.alignCenter]}>
                    <Button title={"NEXT"}
                            styleButton={{
                                backgroundColor: "#E3C000",
                                paddingHorizontal: "40%",
                                paddingVertical: 15,
                                marginTop: 20,
                            }}
                            styleText={{
                                fontSize: 20,
                                fontWeight: "bold",
                            }}
                    />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {backgroundColor: "#C4C4C4"},

    fontSize_20: {fontSize: 20},
    fontSize_30: {fontSize: 30},

    fontBold: {fontWeight: "bold"},

    justifyBetween: {justifyContent: "space-between"},
    justifyAround: {justifyContent: "space-around"},

    pl_10: {paddingLeft: 10},
})
import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function CodeScreen() {
    return (
        <SafeAreaView style={[s.flex]}>
            <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
                            locations={[0, 0.3, 0.8, 0.9, 1]}>
                <View style={[s.h25, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textSize48, s.textBold]}>{"CODE"}</Text>
                </View>
                <View style={[s.h15, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textCenter, styles.fontSize_30, styles.fontBold]}>{"VERIFICATION"}</Text>
                </View>
                <View style={[s.h15, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textCenter, styles.fontSize_20, styles.fontBold]}>
                        {"Enter ontime password sent on\n"
                        + "++849092605798"}</Text>
                </View>
                <View style={[s.h10, s.justifyCenter_alignCenter, s.flexRow]}>
                    <TextInput style={[styles.borderW1, s.textCenter, s.aspectRatio1, s.h80, s.textSize24]}
                        maxLength={1} />
                    <TextInput style={[styles.borderW1, s.textCenter, s.aspectRatio1, s.h80, s.textSize24]}
                               maxLength={1} />
                    <TextInput style={[styles.borderW1, s.textCenter, s.aspectRatio1, s.h80, s.textSize24]}
                               maxLength={1} />
                    <TextInput style={[styles.borderW1, s.textCenter, s.aspectRatio1, s.h80, s.textSize24]}
                               maxLength={1} />
                    <TextInput style={[styles.borderW1, s.textCenter, s.aspectRatio1, s.h80, s.textSize24]}
                               maxLength={1} />
                    <TextInput style={[styles.borderW1, s.textCenter, s.aspectRatio1, s.h80, s.textSize24]}
                               maxLength={1} />
                </View>
                <View style={[s.h35, s.alignCenter]}>
                    <Button title={"VERIFY CODE"}
                            styleButton={{
                                backgroundColor: "#E3C000",
                                width: "90%",
                                paddingVertical: 15,
                                marginTop: "10%",
                            }}
                            styleText={{
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
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

    marginTop10: {marginTop: 10},

    borderW1: {borderWidth: 1},
})
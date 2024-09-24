import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function LoginScreen() {
    return(
        <SafeAreaView style={[s.flex]}>
            <LinearGradient colors={["#FBCB00", "#BF9A00", "#BF9A00"]}
                            locations={[0, 0.35, 1]}
                            style={[s.h100, s.p18]}
            >
                <View style={[s.h25, s.justifyCenter_alignStart]}>
                    <Text style={[s.textSize30, s.textBold]}>LOGIN</Text>
                </View>
                <View style={[s.h25, s.justifyAround]}>
                    <View style={[s.flexRow, styles.bw2, styles.bcWhite, s.h40, s.alignCenter, s.p12, styles.input]}>
                        <Image source={require("../myassets/Avatar.png")}
                               style={[s.w10, s.aspectRatio1]}
                                 resizeMode={"contain"}
                        />
                        <TextInput style={[styles.pl24, s.textSize24]}
                                   placeholder={"Name"}
                        />
                    </View>
                    <View style={[s.flexRow, styles.bw2, styles.bcWhite, s.h40, s.alignCenter, s.p12, styles.input]}>
                        <Image source={require("../myassets/Lock.png")}
                               style={[s.w10, s.aspectRatio1]}
                               resizeMode={"contain"}
                        />
                        <TextInput style={[styles.pl24, s.textSize24, s.w80]}
                                   placeholder={"Password"}
                        />
                        <TouchableOpacity style={[s.w10, s.justifyCenter_alignCenter]}>
                            <Image source={require("../myassets/Eye.png")}
                                   style={[s.w100, s.selfCenter]}
                                   resizeMode={"contain"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[s.h50, styles.mt10p]}>
                    <Button title={"LOGIN"}
                            styleButton={[s.bgBlack, s.justifyCenter_alignCenter, s.h15]}
                            styleText={[s.textWhite, s.textCenter, s.textBold, s.textSize24]}
                    />
                    <Button title={"CREATE ACCOUNT"}
                            styleText={[s.textBlack, s.textCenter, s.textBold, s.textSize24, styles.mt15p]}
                    />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {backgroundColor: "#DCBE3B"},

    bw2: {borderWidth: 2},
    bcWhite: {borderColor: "white"},

    mt10p: {marginTop: "10%"},
    mt15p: {marginTop: "15%"},

    pl24: {paddingLeft: 24},
    pH12: {paddingHorizontal: 12},
})
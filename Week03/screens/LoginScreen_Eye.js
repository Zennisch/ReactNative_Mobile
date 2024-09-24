import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function LoginScreen_Eye() {
    return(
        <SafeAreaView style={[s.flex, s.p12]}>
            <View style={[s.h25, s.justifyCenter_alignCenter]}>
                <Image source={require("../myassets/Eyeball.png")}/>
            </View>
            <View style={[s.w90, s.h25, s.alignCenter, s.justifyAround, s.selfCenter]}>
                <View style={[s.h50, s.flexRow, styles.borderBottom, styles.borderGray]}>
                    <Image source={require("../myassets/AvatarClear.png")}
                           style={[s.w20, s.selfCenter]}
                           resizeMode={"contain"}
                    />
                    <TextInput style={[s.w80, s.textSize24]}
                               placeholder={"Please input user name"}
                    />
                </View>
                <View style={[s.h50, s.flexRow, styles.borderBottom, styles.borderGray]}>
                    <Image source={require("../myassets/LockClear.png")}
                           style={[s.w20, s.selfCenter]}
                           resizeMode={"contain"}
                    />
                    <TextInput style={[s.w80, s.textSize24]}
                               placeholder={"Please input password"}
                    />
                </View>
            </View>
            <View style={[s.h20, s.alignCenter, s.justifyAround, styles.mt5p]}>
                <Button title={"LOGIN"}
                        styleButton={{
                            backgroundColor: "#386FFC",
                            width: "90%",
                            height: "35%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                        }}
                        styleText={{
                            color: "white",
                            fontSize: 24,
                        }} />
                <View style={[s.flexRow, s.justifyAround, s.alignCenter, s.w90]}>
                    <Button title={"Register"}
                            styleButton={[s.w50, styles.selfStart]}
                            styleText={[s.textBlack, s.textSize24]}
                    />
                    <Button title={"Forgot Password"}
                            styleButton={[s.w50, styles.selfEnd]}
                            styleText={[s.textBlack, s.textSize24]}
                    />
                </View>
            </View>
            <View style={[s.h30, s.justifyEvenly, s.alignCenter]}>
                <View>
                    <View style={[styles.line]}></View>
                    <Text style={[s.textCenter, s.textSize18, styles.bgTransparent, styles.zi1]}>{"Other Login Methods"}</Text>
                </View>
                <View style={[s.flexRow, s.justifyBetween, s.w90]}>
                    <TouchableOpacity>
                        <Image source={require("../myassets/AddPerson.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../myassets/Wifi.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: "#3A579C",
                        aspectRatio: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}>
                            <Image source={require("../myassets/Facebook.png")}/>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    borderBottom: {borderBottomWidth: 1},
    borderGray: {borderColor: "gray"},

    bgTransparent: {backgroundColor: "#f2f2f2"},

    mt5p: {marginTop: "5%"},

    selfStart: {alignSelf: "flex-start"},
    selfEnd: {alignSelf: "flex-end"},
    zi1: {zIndex: 1},

    line: {
        alignSelf: "center",
        position: "absolute",
        width: "90%",
        height: 2,
        backgroundColor: "blue",
        top: "50%",
    }
})
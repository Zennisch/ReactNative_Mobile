import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function HomeScreen_D() {
    return(
        <SafeAreaView style={[styles.container, s.flex, s.p12]}>
            <View style={[s.h15, s.justifyCenter_alignCenter]}>
                <Text style={[s.textCenter, s.textBold, s.textSize36]}>LOGIN</Text>
            </View>
            <View style={[s.h30, s.justifyAround]}>
                <TextInput style={[styles.input, s.h30, s.p18, s.textSize18]}
                           placeholder={"Email"}>
                </TextInput>
                <View style={[s.h30, s.flexRow]}>
                    <TextInput style={[styles.input, s.h100, s.w80, s.p18, s.textSize18]}
                               placeholder={"Password"}>
                    </TextInput>
                    <View style={[s.h100, s.w20, s.justifyCenter_alignCenter, styles.input]}>
                        <Image source={require("../myassets/Eye.png")}
                               style={[s.h75, s.w100, s.selfCenter, styles.input]}
                               resizeMode={"contain"}
                        />
                    </View>
                </View>
            </View>
            <View style={[s.h30, s.justifyCenter_alignCenter, s.justifyEvenly]}>
                <Button title={"LOGIN"}
                        styleButton={[s.w100, s.h25, styles.loginButton, s.justifyCenter_alignCenter]}
                        styleText={[s.textWhite, s.textBold, s.textSize24]}
                />
                <Text style={[s.textCenter]}>{"When you are agree to terms and conditions"}</Text>
                <Button title={"Forgot your password?"}
                        styleText={s.textBlue}
                />
                <Text style={[s.textCenter]}>{"Or login with"}</Text>
            </View>
            <View style={[s.h15, s.flexRow, s.justifyCenter_alignCenter]}>
                <View style={[s.w30, s.h50, styles.facebookButton, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/FacebookSmall.png")}
                            style={[styles.mr12]}

                    />
                </View>
                <View style={[s.w30, s.h50, styles.zaloButton, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textSize36, s.textBold, s.textCenter, s.textWhite]}>Z</Text>
                </View>
                <View style={[s.w30, s.h50, s.justifyCenter_alignCenter, styles.bW1, styles.bCBlue]}>
                    <Image source={require("../myassets/Google.png")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: "#D8EFDF"},
    input: {backgroundColor: "#CAE1D1"},
    loginButton: {backgroundColor: "#C34E3B"},
    facebookButton: {backgroundColor: "#25479B"},
    zaloButton: {backgroundColor: "#0F8EE0"},

    mr12: {marginRight: 12},

    bW1: {borderWidth: 1},
    bCBlue: {borderColor: "blue"},
})
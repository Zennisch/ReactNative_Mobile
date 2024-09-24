import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function RegisterScreen() {
    return (
        <SafeAreaView style={[styles.container, s.flex, s.p18]}>
            <View style={[s.h10]}>
                <Text style={[s.textCenter, s.textBold, s.textSize36]}>REGISTER</Text>
            </View>
            <View style={[s.h60, s.justifyAround]}>
                <TextInput style={[styles.input, s.h15, s.p18, s.textSize18]}
                           placeholder={"Name"}>
                </TextInput>
                <TextInput style={[styles.input, s.h15, s.p18, s.textSize18]}
                           placeholder={"Phone"}>
                </TextInput>
                <TextInput style={[styles.input, s.h15, s.p18, s.textSize18]}
                           placeholder={"Email"}>
                </TextInput>
                <View style={[s.h15, s.flexRow]}>
                    <TextInput style={[styles.input, s.h100, s.w80, s.p18, s.textSize18]}
                               placeholder={"Password"}>
                    </TextInput>
                    <View style={[s.h100, s.w20, s.justifyCenter_alignCenter, styles.input]}>
                        <Image source={require("../myassets/Eye.png")}
                               style={[s.h60, s.w100, s.selfCenter, styles.input]}
                               resizeMode={"contain"}
                        />
                    </View>
                </View>
                <TextInput style={[styles.input, s.h15, s.p18, s.textSize18]}
                           placeholder={"Birthday"}>
                </TextInput>
            </View>
            <View style={[s.h10, s.flexRow, s.justifyCenter_alignCenter]}>
                <View style={[s.flexRow, s.w50, s.justifyCenter_alignCenter]}>
                    <Button styleButton={{
                        borderWidth: 3,
                        height: "50%",
                        aspectRatio: 1,
                        borderRadius: 50,
                    }}
                    />
                    <Text style={[s.textBold, s.textSize24, styles.ml5p]}>{"Male"}</Text>
                </View>
                <View style={[s.flexRow, s.w50, s.justifyCenter_alignCenter]}>
                    <Button styleButton={{
                        borderWidth: 3,
                        height: "50%",
                        aspectRatio: 1,
                        borderRadius: 50,
                    }}
                    />
                    <Text style={[s.textBold, s.textSize24, styles.ml5p]}>{"Female"}</Text>
                </View>
            </View>
            <View style={[s.h20]}>
                <Button title={"LOGIN"}
                        styleButton={[s.w100, s.h30, styles.loginButton, s.justifyCenter_alignCenter]}
                        styleText={[s.textWhite, s.textBold, s.textSize24]}
                />
                <Text style={[s.textCenter, styles.mt12]}>{"When you are agree to terms and conditions"}</Text>
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
    mt12: {marginTop: 12},
    ml5p: {marginLeft: "5%"},

    bW1: {borderWidth: 1},
    bCBlue: {borderColor: "blue"},
})
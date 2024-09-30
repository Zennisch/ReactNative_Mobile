import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import s from "../styles/MyStyles";
import {useState} from "react";
import Button from "../components/Button";

export default function PasswordScreen() {

    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const tickMap = {
        true: require("../myassets/tick.png"),
        false: null
    }

    return (
        <SafeAreaView style={[s.flex, s.p18, {backgroundColor: "#3B3B98"}]}>
            <View style={[s.wh100, styles.bR12, s.alignCenter, s.p18, {backgroundColor: "#23235B"}]}>
                <View style={[s.h20, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textWhite, s.textSize30, s.textCenter, s.textBold]}>{"PASSWORD\nGENERATOR"}</Text>
                </View>
                <View style={[s.h10, s.w100, s.justifyCenter_alignCenter, {backgroundColor: "#151537"}]}>
                    <Text style={[s.textWhite, s.textSize24, s.textCenter]}>{password}</Text>
                </View>
                <View style={[s.h60, s.justifyBetween, styles.pV12]}>
                    <View style={[s.flexRow, s.h15, s.justifyBetween, s.alignCenter]}>
                        <Text style={[s.textWhite, s.w60, s.textSize18]}>Password length</Text>
                        <TextInput style={[s.w40, s.bgWhite, s.h60, s.textCenter, s.textSize18]}
                                   placeholder={"8"}
                                   onChangeText={(text) => setPasswordLength(parseInt(text))}
                        />
                    </View>
                    <View style={[s.flexRow, s.h15, s.justifyBetween, s.alignCenter]}>
                        <Text style={[s.textWhite, s.w90, s.textSize18]}>Include lowercase letters</Text>
                        <TouchableOpacity style={[s.w10, s.aspectRatio1, s.bgWhite, s.justifyCenter_alignCenter]}
                                          onPress={() => setIncludeLowerCase(!includeLowerCase)}
                        >
                            <Image source={tickMap[includeLowerCase]} style={[s.wh50]}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[s.flexRow, s.h15, s.justifyBetween, s.alignCenter]}>
                        <Text style={[s.textWhite, s.w90, s.textSize18]}>Include uppercase letters</Text>
                        <TouchableOpacity style={[s.w10, s.aspectRatio1, s.bgWhite, s.justifyCenter_alignCenter]}
                                          onPress={() => setIncludeUpperCase(!includeUpperCase)}
                        >
                            <Image source={tickMap[includeUpperCase]} style={[s.wh50]}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[s.flexRow, s.h15, s.justifyBetween, s.alignCenter]}>
                        <Text style={[s.textWhite, s.w90, s.textSize18]}>Include numbers</Text>
                        <TouchableOpacity style={[s.w10, s.aspectRatio1, s.bgWhite, s.justifyCenter_alignCenter]}
                                          onPress={() => setIncludeNumbers(!includeNumbers)}
                        >
                            <Image source={tickMap[includeNumbers]} style={[s.wh50]}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[s.flexRow, s.h15, s.justifyBetween, s.alignCenter]}>
                        <Text style={[s.textWhite, s.w90, s.textSize18]}>Include special symbols</Text>
                        <TouchableOpacity style={[s.w10, s.aspectRatio1, s.bgWhite, s.justifyCenter_alignCenter]}
                                          onPress={() => setIncludeSymbols(!includeSymbols)}
                        >
                            <Image source={tickMap[includeSymbols]} style={[s.wh50]}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[s.h10, s.w100, s.justifyCenter_alignCenter]}>
                    <Button title={"GENERATE PASSWORD"}
                            styleButton={[s.wh90, s.justifyCenter_alignCenter, {backgroundColor: "#3B3B98"}]}
                            styleText={[s.textWhite, s.textSize24]}
                            onPress={() => setPassword(generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols))}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    if (length < 1 || length > 32) {
        return "Invalid password length!";
    }
    try {
        parseInt(length);
    } catch (e) {
        return "Invalid password length!";
    }
    let password = "";
    let characters = "";
    if (includeLowerCase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUpperCase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
        characters += "0123456789";
    }
    if (includeSymbols) {
        characters += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

const styles = StyleSheet.create({
    bR12: {borderRadius: 12},
    pV12: {paddingVertical: 12},
})
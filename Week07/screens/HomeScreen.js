import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={[s.flex, s.flexColumn, s.alignCenter, s.bgWhite]}>
            <View style={[s.h40, s.w100, s.justifyCenter_alignCenter]}>
                <Image source={require("../myassets/task.png")}
                       style={[s.wh90]}
                       resizeMode={"contain"}
                />
            </View>
            <View style={[s.h15, s.justifyCenter_alignCenter]}>
                <Text style={[{color: "#8353E2"}, s.textCenter, s.textBold, s.textSize30]}>{"MANAGE YOUR\nTASK"}</Text>
            </View>
            <View style={[s.h15, s.justifyCenter, s.w85]}>
                <View style={[s.flexRow, s.alignCenter, s.p6, styles.borderInput]}>
                    <Image source={require("../myassets/mail.png")}
                           style={[s.w5, s.aspectRatio1]}
                           resizeMode={"contain"}
                    />
                    <TextInput placeholder={"Enter your name"}
                               style={[s.w90, styles.pL6]}
                    />
                </View>
            </View>
            <View style={[s.h30, s.w100, s.justifyCenter_alignCenter]}>
                <Button title={"GET STARTED →"}
                        onPress={() => navigation.navigate("ProfileScreen")}
                        styleButton={[{backgroundColor: "#00BDD6", borderRadius: 15}, s.w50, s.h20, s.justifyCenter_alignCenter]}
                        styleText={[s.textWhite, s.textSize18]}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    borderInput: { borderWidth: 1, borderColor: "gray", borderRadius: 10 },
    pH6 : {paddingHorizontal: 6},
    pL6 : {paddingLeft: 6},
})
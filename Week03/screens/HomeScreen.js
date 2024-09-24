import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function HomeScreen() {
    return (
        <SafeAreaView style={[s.flex, styles.container]}>
            <View style={[s.h40, s.justifyCenter_alignCenter]}>
                <Image source={require("../myassets/Eclipse.png")}/>
            </View>
            <View style={[s.h20, s.justifyCenter_alignCenter]}>
                <Text style={[s.textCenter, styles.fontSize_30, styles.fontBold]}>{"GROW\nYOUR BUSINESS"}</Text>
            </View>
            <View style={[s.h20, s.justifyCenter_alignCenter]}>
                <Text style={[s.textCenter, styles.fontSize_20, styles.fontBold]}>
                    {"We will help you to grow your business using\n"
                        + "online server"}
                </Text>
            </View>
            <View style={[s.h20, s.justifyCenter]}>
                <View style={[s.flexRow, styles.justifyAround]}>
                    <Button
                        title="LOGIN"
                        styleButton={{
                            backgroundColor: "#E3C000",
                            paddingHorizontal: 40,
                            paddingVertical: 15,
                            borderRadius: 10,
                        }}
                        styleText={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    />
                    <Button
                        title="SIGN UP"
                        styleButton={{
                            backgroundColor: "#E3C000",
                            paddingHorizontal: 40,
                            paddingVertical: 15,
                            borderRadius: 10,
                        }}
                        styleText={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: "#00CCF9"},

    fontSize_20: {fontSize: 20},
    fontSize_30: {fontSize: 30},

    fontBold: {fontWeight: "bold"},

    justifyBetween: {justifyContent: "space-between"},
    justifyAround: {justifyContent: "space-around"},
})
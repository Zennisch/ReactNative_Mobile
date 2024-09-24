import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";
import {LinearGradient} from "expo-linear-gradient";

export default function HomeScreen_A() {
    return (
        <SafeAreaView style={[s.flex]}>
            <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
                            locations={[0, 0.3, 0.8, 0.9, 1]}>
                <View style={[s.h40, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/Eclipse.png")}/>
                </View>
                <View style={[s.h10, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textCenter, styles.fontSize_30, styles.fontBold]}>{"GROW\nYOUR BUSINESS"}</Text>
                </View>
                <View style={[s.h20, s.justifyCenter_alignCenter]}>
                    <Text style={[s.textCenter, styles.fontSize_20, styles.fontBold]}>
                        {"We will help you to grow your business using\n"
                            + "online server"}
                    </Text>
                </View>
                <View style={[s.h10, s.justifyCenter]}>
                    <View style={[s.flexRow, styles.justifyAround]}>
                        <Button
                            title="LOGIN"
                            styleButton={{
                                backgroundColor: "#E3C000",
                                paddingHorizontal: 40,
                                paddingVertical: 15,
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
                            }}
                            styleText={{
                                fontSize: 20,
                                fontWeight: "bold",
                            }}
                        />
                    </View>
                </View>
                <View style={[s.h20]}>
                    <Button title={"HOW WE WORK?"}
                             styleText={[styles.fontBold, styles.fontSize_30, s.textCenter]}
                    />
                </View>
            </LinearGradient>
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
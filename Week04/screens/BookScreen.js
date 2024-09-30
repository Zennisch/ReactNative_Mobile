import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";
import {useState} from "react";

export default function BookScreen({navigation, route}) {

    const [amount, setAmount] = useState(1);

    return (
        <SafeAreaView style={[s.flex]}>
            <View style={[s.h80, styles.gap10, styles.bgContainer]}>
                <View style={[s.h50, s.bgWhite, s.p6]}>
                    <View style={[s.h50, s.flexRow]}>
                        <View style={[s.w30, s.justifyCenter_alignCenter]}>
                            <Image source={require("../myassets/book.png")}
                                   style={[s.w100]}
                                   resizeMode={"contain"}/>
                        </View>
                        <View style={[s.w70, s.justifyEvenly]}>
                            <Text>Nguyên hàm tích phân và ứng dụng</Text>
                            <Text>Cung cấp bởi Tiki Trading</Text>
                            <Text style={[s.textRed, s.textSize24]}>141.800 đ</Text>
                            <Text style={[s.textGray, s.textSize12, s.textLineThrough]}>141.800 đ</Text>
                            <View style={[s.justifyBetween, s.flexRow, s.alignCenter]}>
                                <View style={s.flexRow}>
                                    <Button title={"-"}
                                            styleButton={[s.w15, s.aspectRatio1, s.bgGray, s.justifyCenter_alignCenter]}
                                            styleText={[s.textCenter, s.textSize18, s.lineHeight18]}
                                            onPress={() => {if (amount > 0) setAmount(amount - 1)}}
                                    />
                                    <View style={[s.w15, s.justifyCenter_alignCenter]}>
                                        <Text>{amount}</Text>
                                    </View>
                                    <Button title={"+"}
                                            styleButton={[s.w15, s.aspectRatio1, s.bgGray, s.justifyCenter_alignCenter]}
                                            styleText={[s.textCenter, s.textSize18, s.lineHeight18]}
                                            onPress={() => {setAmount(amount + 1)}}
                                    />
                                </View>
                                <Button title={"Mua sau"}
                                        styleText={[s.textSize12, s.textBlue]} />
                            </View>
                        </View>
                    </View>
                    <View style={[s.h30]}></View>
                    <View style={[s.h20]}></View>
                </View>
                <View style={[s.h15]}>

                </View>
                <View style={[s.h15]}>

                </View>
            </View>
            <View style={[s.h20]}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gap10: {gap: 10},
    bgContainer: {backgroundColor: "#C4C4C4"}
})
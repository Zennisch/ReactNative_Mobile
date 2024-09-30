import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";
import {useState} from "react";

export default function BookScreen({navigation, route}) {

    const [amount, setAmount] = useState(1);

    return (
        <SafeAreaView style={[s.flex]}>
            <View style={[s.h80, styles.gap18, styles.bgContainer]}>
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
                                            onPress={() => {
                                                if (amount > 0) setAmount(amount - 1)
                                            }}
                                    />
                                    <View style={[s.w20, s.justifyCenter_alignCenter]}>
                                        <Text>{amount}</Text>
                                    </View>
                                    <Button title={"+"}
                                            styleButton={[s.w15, s.aspectRatio1, s.bgGray, s.justifyCenter_alignCenter]}
                                            styleText={[s.textCenter, s.textSize18, s.lineHeight18]}
                                            onPress={() => {
                                                setAmount(amount + 1)
                                            }}
                                    />
                                </View>
                                <Button title={"Mua sau"}
                                        styleButton={[s.w20]}
                                        styleText={[s.textSize12, s.textBlue, s.textBold]}/>
                            </View>
                        </View>
                    </View>
                    <View style={[s.h15, s.flexRow]}>
                        <View style={[s.justifyCenter_alignCenter, s.w30]}>
                            <Text style={[s.textBold, s.textSize12]}>Mã giảm giá đã lưu</Text>
                        </View>
                        <View style={[s.w70, s.justifyCenter]}>
                            <Button title={"Xem tại đây"}
                                    styleText={[s.textSize12, s.textBlue, s.textBold]}/>
                        </View>
                    </View>
                    <View style={[s.h35, s.flexRow, s.alignCenter, s.justifyAround]}>
                        <TouchableOpacity
                            style={[s.w50, s.h50, s.justifyCenter_alignCenter, s.flexRow, styles.gap10, styles.bW1]}>
                            <View style={[styles.bgYellow, s.h50, s.w20]}></View>
                            <Text style={[s.textBold, s.textSize18]}>Mã Giảm Giá</Text>
                        </TouchableOpacity>
                        <Button title={"Áp dụng"}
                                styleButton={[s.w25, s.h50, s.justifyCenter_alignCenter, {backgroundColor: "#0A5EB7"}]}
                                styleText={[s.textSize18, s.textWhite, s.textBold]}/>
                    </View>
                </View>
                <View style={[s.h10, s.flexRow, s.justifyBetween, s.alignCenter, s.bgWhite, styles.pH24]}>
                    <Text style={[s.textBold]}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
                    <Button title={"Nhập tại đây?"}
                            styleText={[s.textSize12, s.textBlue, s.textBold]}/>
                </View>
                <View style={[s.h10, s.flexRow, s.justifyBetween, s.alignCenter, s.bgWhite, styles.pH24]}>
                    <Text style={[s.textBold, s.textSize18]}>Tạm tính</Text>
                    <Text style={[s.textBold, s.textRed, s.textSize24]}>{calculate(amount * 141800)} đ</Text>
                </View>
            </View>
            <View style={[s.h20, s.justifyAround, styles.pH18]}>
                <View style={[s.flexRow, s.alignCenter, s.justifyBetween]}>
                    <Text style={[s.textBold, s.textSize18, s.textGray]}>Thành tiền</Text>
                    <Text style={[s.textBold, s.textRed, s.textSize24]}>{calculate(amount * 141800)} đ</Text>
                </View>
                <Button title={"TIẾN HÀNH ĐẶT HÀNG"}
                        styleButton={[s.w100, s.h40, s.justifyCenter_alignCenter, s.bgRed]}
                        styleText={[s.textSize24, s.textWhite, s.textBold]}
                />
            </View>
        </SafeAreaView>
    )
}

function calculate(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const styles = StyleSheet.create({
    gap18: {gap: 18},
    bgContainer: {backgroundColor: "#C4C4C4"},
    bgYellow: {backgroundColor: "yellow"},
    bW1: {borderWidth: 1},
    pH18: {paddingHorizontal: 18},
    pH24: {paddingHorizontal: 24},
})
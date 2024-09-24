import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import s from './styles/MyStyles';
import Button from "./components/Button";

export default function App() {
    return (
        <SafeAreaView style={[s.flex, s.flexColumn, styles.bgGray]}>
            <View style={[s.h80, styles.gap_10]}>
                <View style={[s.h60, s.bgWhite]}>

                    <View style={[s.flexRow, s.w100, s.h50]}>
                        <View style={[s.w30, s.h100, s.p6]}>
                            <Image
                                source={require('./myassets/image_1.jpg')}
                                style={[s.w100, s.h100]}
                            />
                        </View>
                        <View style={[s.w70, s.h100, styles.space_around, s.p6]}>
                            <Text style={[styles.font_16]}>Thành phố đi vắng</Text>
                            <Text style={[styles.font_16]}>Cung cấp bởi Tiki Trading</Text>
                            <Text style={[styles.font_20, s.textRed]}>141.800 đ</Text>
                            <Text style={[styles.font_12, styles.line_through, styles.textGray]}>141.800 đ</Text>
                            <View style={[s.flexRow, styles.space_between]}>
                                <View style={[s.w70, s.flexRow, styles.gap_10]}>
                                    <Button styleButton={[styles.bgLightGray, styles.w15, styles.aspect_ratio_1, s.justifyCenter_alignCenter]}
                                            styleFont={[styles.font_30]}
                                            title={"-"}
                                    />
                                    <Text>1</Text>
                                    <Button styleButton={[styles.bgLightGray, styles.w15, styles.aspect_ratio_1, s.justifyCenter_alignCenter]}
                                            styleFont={[styles.font_30]}
                                            title={"+"}
                                    />
                                </View>
                                <View style={[s.w30]}>
                                    <Button styleFont={[s.textBlue, s.textCenter]}
                                            title="Mua sau"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={[s.h10, s.bgGreen]}>

                </View>
                <View style={[s.h10, s.bgGreen]}>

                </View>
            </View>
            <View style={[s.h20, s.justifyEnd]}>
                <View style={[s.h80, s.bgBlue, s.justifyStart]}>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    w15: {
        width: '15%',
    },
    bgGray: {
        backgroundColor: 'gray',
    },
    bgLightGray: {
        backgroundColor: 'lightgray',
    },
    textGray: {
        color: 'gray',
    },
    gap_10: {
        gap: 10,
    },
    space_between: {
        justifyContent: 'space-between',
    },
    space_around: {
        justifyContent: 'space-around',
    },
    font_12: {
        fontSize: 12,
    },
    font_16: {
        fontSize: 16,
    },
    font_20: {
        fontSize: 20,
    },
    font_30: {
        fontSize: 30,
    },
    line_through: {
        textDecorationLine: 'line-through',
    },
    aspect_ratio_1: {
        aspectRatio: 1,
    },
})

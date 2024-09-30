import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function HomeScreen({route, navigation}) {

    const {selectedColor} = route.params || {selectedColor: '#AAAAFF'};

    const colorOfImage = {
        '#AAAAFF': require('../myassets/vs_blue.png'),
        '#FF0000': require('../myassets/vs_red.png'),
        '#000000': require('../myassets/vs_black.png'),
        '#EEEEEE': require('../myassets/vs_silver.png'),
    }

    return (
        <SafeAreaView style={{flex: 1, padding: 35, backgroundColor: '#EEEEEE'}}>
            <View style={{height: '50%', width: '100%'}}>
                <Image
                    source={colorOfImage[selectedColor]}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                />
            </View>
            <View
                style={{
                    height: '7%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                <Text style={{
                    fontSize: 20,
                }}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
            </View>
            <View
                style={{
                    height: '7%',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                <View
                    style={{
                        height: '100%',
                        width: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 15,
                    }}>
                    <Image
                        source={require('../myassets/star.png')}
                        style={{height: '50%'}}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../myassets/star.png')}
                        style={{height: '50%'}}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../myassets/star.png')}
                        style={{height: '50%'}}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../myassets/star.png')}
                        style={{height: '50%'}}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../myassets/star.png')}
                        style={{height: '50%'}}
                        resizeMode="contain"
                    />
                </View>
                <View style={{
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Text>(Xem 828 đánh giá)</Text>
                </View>
            </View>
            <View
                style={{height: '7%', flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: '30%'}}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>
                        1.790.000 đ
                    </Text>
                </View>
                <View
                    style={{
                        width: '70%'
                    }}>
                    <Text style={{
                        fontSize: 12,
                        textDecorationLine: 'line-through'
                    }}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={{height: '7%', justifyContent: 'center'}}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                    Ở đâu rẻ hơn hoàn tiền
                </Text>
            </View>
            <View
                style={{
                    height: '21%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    style={{
                        height: '35%',
                        width: '100%',
                        borderWidth: 1,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate("SelectScreen")}>
                    <Text style={{textAlign: 'center'}}>4 MÀU - CHỌN MÀU</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: '35%',
                        width: '100%',
                        backgroundColor: 'red',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center'
                    }}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
import {useState} from "react";

export default function App({navigation}) {

    const [selectedColor, setSelectedColor] = useState('#AAAAFF');

    const colorOfImage = {
        '#AAAAFF': require('../myassets/vs_blue.png'),
        '#FF0000': require('../myassets/vs_red.png'),
        '#000000': require('../myassets/vs_black.png'),
        '#EEEEEE': require('../myassets/vs_silver.png'),
    }

    return (
        <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#EEEEEE'}}>
            <View
                style={{height: '20%', flexDirection: 'row'}}>
                <View style={{width: '30%'}}>
                    <Image source={colorOfImage[selectedColor]}
                           style={{width: '100%', height: '100%'}}
                           resizeMode='contain'
                    />
                </View>
                <View style={{width: '70%'}}>
                    <Text>Điện thoại Vsmart Joy 3</Text>
                    <Text>Hàng chính hãng</Text>
                </View>
            </View>
            <View
                style={{
                    height: '80%',
                    padding: 10,
                    gap: 10,
                    backgroundColor: 'lightgray',
                }}>
                <Text>Chọn một màu bên dưới</Text>
                <View
                    style={{
                        width: '100%',
                        height: '80%',
                        gap: 10,
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{
                            aspectRatio: 1,
                            height: '20%',
                            backgroundColor: '#AAAAFF',
                        }}
                        onPress={() => setSelectedColor('#AAAAFF')}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            aspectRatio: 1,
                            height: '20%',
                            backgroundColor: '#FF0000',
                        }}
                        onPress={() => setSelectedColor('#FF0000')}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            aspectRatio: 1,
                            height: '20%',
                            backgroundColor: '#000000',
                        }}
                        onPress={() => setSelectedColor('#000000')}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            aspectRatio: 1,
                            height: '20%',
                            backgroundColor: '#EEEEEE',
                        }}
                        onPress={() => setSelectedColor('#EEEEEE')}
                    ></TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#4444FF',
                        height: '10%',
                        borderRadius: 10
                    }}
                    onPress={() => navigation.navigate('HomeScreen', { selectedColor })}
                >
                    <Text style={{color: 'white'}}>XONG</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

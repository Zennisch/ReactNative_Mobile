import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function App({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: '#EEEEEE' }}>
            <View
                style={{ height: '20%', flexDirection: 'row' }}>
                <View style={{ width: '30%' }}>
                    <Image source={require('../myassets/vs_blue.png')}
                           style={{width: '100%', height: '100%'}}
                           resizeMode= 'contain'
                    />
                </View>
                <View style={{ width: '70%' }}>
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
                            backgroundColor: '#aaaaff',
                        }}></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            aspectRatio: 1,
                            height: '20%',
                            backgroundColor: 'red',
                        }}></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            aspectRatio: 1,
                            height: '20%',
                            backgroundColor: 'black',
                        }}></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            aspectRatio: 1,
                            height: '20%',
                            backgroundColor: '#eeeeee',
                        }}></TouchableOpacity>
                </View>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#4444FF', height: '10%', borderRadius: 10}}>
                    <Text style={{color: 'white'}}>XONG</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

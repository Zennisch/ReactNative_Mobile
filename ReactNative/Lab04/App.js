import { StatusBar } from "expo-status-bar";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.mainView}>
                    <View style={{ height: "60%", flexDirection: "row" }}>
                        <View style={{ width: "50%", height: "100%" }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: "100%", height: "100%" }}
                                source={require("./myassets/LOST.jpg")}
                            />
                        </View>
                        <View style={{ width: "50%", height: "100%" }}>
                            <Text style={{ fontSize: 20 }}>
                                Thành phố đi vắng
                            </Text>
                            <Text style={{ fontSize: 14 }}>
                                Cung cấp bởi Tiki Trading
                            </Text>
                            <Text style={{ fontSize: 22, color: "red" }}>
                                141.800 đ
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "gray",
                                    textDecorationLine: "line-through",
                                }}
                            >
                                141.800 đ
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        width: "70%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{ paddingHorizontal: 10 }}
                                    >
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <TextInput>1</TextInput>
                                    <TouchableOpacity>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{ color: "blue" }}>
                                            Xem tại đây
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "20%",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <Text style={{ width: "50%", textAlign: "center" }}>
                            View sách
                        </Text>
                        <TouchableOpacity style={{ width: "50%" }}>
                            <Text style={{ color: "blue" }}>Xem tại đây</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: "20%" }}>
                        <Text>View sách</Text>
                    </View>
                </View>
                <View style={styles.subView}>
                    <Text style={{ width: "70%" }}>
                        Bạn có phiếu quà tặng Tiki/Gotit/Urbox?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: "blue" }}>Nhập tại đây?</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.subView]}>
                    <View
                        style={{
                            width: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>Thành tiền</Text>
                    </View>
                    <View
                        style={{
                            width: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "red" }}>100.000 đ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ flexDirection: "row", height: "50%" }}>
                    <View
                        style={{
                            width: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>Thành tiền</Text>
                    </View>
                    <View
                        style={{
                            width: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "red" }}>100.000 đ</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#888",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    body: {
        gap: 20,
        height: "85%",
        justifyContent: "flex-start",
        width: "100%",
    },
    mainView: {
        height: "40%",
        backgroundColor: "#fff",
        padding: 10,
        flexDirection: "column",
    },
    subView: {
        height: "10%",
        backgroundColor: "#fff",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    footer: {
        backgroundColor: "#fff",
        height: "15%",
        width: "100%",
        padding: 10,
    },
    buyButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#ff0000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
});

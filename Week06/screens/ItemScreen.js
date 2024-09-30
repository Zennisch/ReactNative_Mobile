import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
// import Item from "../components/Item";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function ItemScreen({}) {
    const items = [
        {
            "id": "1",
            "name": "Ca nấu lẩu, nấu mì mini",
            "distributor": "Shop Devang",
            "image": require("../myassets/ca_nau_lau.png"),
        },
        {
            "id": "2",
            "name": "1KG KHÔ GÀ BƠ TỎI",
            "distributor": "LTD Food",
            "image": require("../myassets/ga_bo_toi.png"),
        },
        {
            "id": "3",
            "name": "Xe cần cẩu đa năng",
            "distributor": "Thế giới đồ chơi",
            "image": require("../myassets/xe_can_cau.png"),
        },
        {
            "id": "4",
            "name": "Đồ chơi dạng mô hình",
            "distributor": "Thế giới đồ chơi",
            "image": require("../myassets/do_choi_dang_mo_hinh.png"),
        },
        {
            "id": "5",
            "name": "Lãnh đạo giản đơn",
            "distributor": "Mini Long Book",
            "image": require("../myassets/lanh_dao_gian_don.png"),
        },
        {
            "id": "6",
            "name": "Hiểu lòng con trẻ",
            "distributor": "Mini Long Book",
            "image": require("../myassets/hieu_long_con_tre.png"),
        },
        {
            "id": "7",
            "name": "Donald Trump Thiên tài lãnh đạo",
            "distributor": "Mini Long Book",
            "image": require("../myassets/trump_1.png"),
        }];

    return (
        <View style={[s.flex]}>
            <View style={[{height: 50, backgroundColor: "#1BA9FF"}, s.flexRow]}>
                <TouchableOpacity style={[s.w10, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/ant-design_arrow-left-outlined.png")} style={[s.w50, s.h50]}/>
                </TouchableOpacity>
                <View style={[s.justifyCenter_alignCenter, s.w80]}>
                    <Text style={[s.textWhite, s.textSize24]}>Chat</Text>
                </View>
                <TouchableOpacity style={[s.w10, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/bi_cart-check.png")} style={[s.w50, s.h50]}/>
                </TouchableOpacity>
            </View>
            <FlatList
                data={items}
                renderItem={({item}) => (Item({item}))}
                keyExtractor={item => item.id.toString()}
            />
            <View style={[{height: 50, backgroundColor: "#1BA9FF"}, s.flexRow]}>
                <TouchableOpacity style={[s.w10, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/vector_list.png")} style={[s.w50, s.h50]}/>
                </TouchableOpacity>
                <TouchableOpacity style={[s.w80, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/vector_home.png")}
                           style={[s.h50]}
                           resizeMode={"contain"}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[s.w10, s.justifyCenter_alignCenter]}>
                    <Image source={require("../myassets/vector_back.png")} style={[s.w50, s.h50]}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Item({item}) {
    return (
        <View style={[s.flex, s.flexRow, s.alignCenter, s.justifyStart, s.bgWhite, {height: 100, marginBottom: 5}]}>
            <View style={[s.w20, s.h100, s.justifyStart_alignCenter]}>
                <Image source={item.image} style={[s.w90, s.h90]}/>
            </View>
            <View style={[s.w60, s.h100]}>
                <Text>{item.name}</Text>
                <Text>{item.distributor}</Text>
            </View>
            <View style={[s.w20, s.h100, s.justifyCenter_alignCenter]}>
                <Button title={"Chat"}
                        styleButton={[s.bgRed, s.w90, s.h40, s.justifyCenter_alignCenter]}
                        styleText={[s.textWhite]}
                />
            </View>
        </View>
    )
}

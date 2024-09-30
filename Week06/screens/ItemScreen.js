import {FlatList, Text, View} from "react-native";
import Item from "../components/Item";

export default function ItemScreen({route}) {
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
            // "image": "../myassets/ga_bo_toi.png",
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
        <FlatList
            data={items}
            renderItem={({item}) => (Item({item}))}
            keyExtractor={item => item.id.toString()}
        />
    )
}

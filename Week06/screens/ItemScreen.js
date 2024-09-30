import {FlatList, Text, View} from "react-native";
import Item from "../components/Item";

export default function ItemScreen({route}) {
    const items = [
        {
            "id": 1,
            "name": "Item 1",
            "distributor": "Distributor 1",
            "image": "",
        },
        {
            "id": 2,
            "name": "Item 2",
            "distributor": "Distributor 2",
            "image": "",
        }];

    return (
        <FlatList
            data={items}
            renderItem={({item}) => (Item({item}))}
            keyExtractor={item => item.id.toString()}
        />

    )
}

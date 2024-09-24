import {Text, TouchableOpacity} from "react-native";

export default function Button({ title, styleButton, styleFont, onPress = () => {} }) {
    return (
        <TouchableOpacity style={styleButton} onPress={onPress}>
            <Text style={styleFont}>{title}</Text>
        </TouchableOpacity>
    )
}
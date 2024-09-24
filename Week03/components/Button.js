import {Text, TouchableOpacity} from "react-native";

export default function Button({title, onPress, styleButton, styleText}) {
    return (
        <TouchableOpacity style={styleButton} onPress={onPress}>
            <Text style={styleText}>{title}</Text>
        </TouchableOpacity>
    )
}
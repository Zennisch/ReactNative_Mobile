import {Button, TextInput, View} from "react-native";
import {useRef} from "react";

const UseRefAccessDom = () => {

    const inputRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return(
        <View style={{padding: 20}}>
            <TextInput ref={inputRef} placeholder="Type here" />
            <Button title="Focus Input" onPress={focusInput} />
        </View>
    );
};

export default UseRefAccessDom;

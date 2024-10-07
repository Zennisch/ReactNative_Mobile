import {Button, Text, View} from "react-native";
import {useEffect, useState} from "react";

const IncrementDepsApp = () => {
    const [count, setCount] = useState(0);
    const [countOther, setCountOther] = useState(0);

    useEffect(() => {
        // This effect runs after every render
        console.log('Count has changed:', count);

        // Optional cleanup function
        return () => {
            console.log('Cleaning up...');
        };
    }, [count]); // Effect depends on `count`

    return (
        <View style={{padding: 20}}>
            <Button title={`Increment Count: ${count}`} onPress={() => setCount(count + 1)}/>
            <Button title={`Increment Other: ${countOther}`} onPress={() => setCountOther(countOther + 1)}/>
        </View>
    );
};

export default IncrementDepsApp;

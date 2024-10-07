import React, {useState, useEffect} from 'react'
import {Button, View} from 'react-native'

const IncrementAppOnce = () => {
    const [count, setCount] = useState(0)
    const countEvery3 = Math.floor(count / 3)

    useEffect(() => {
        console.log(countEvery3)
    }, [])

    return (
        <View style={{padding: 20}}>
            <Button
                title={`Increment ${count}`}
                onPress={() => {
                    setCount(count + 1)
                }}
            />
        </View>
    );
};

export default IncrementAppOnce;

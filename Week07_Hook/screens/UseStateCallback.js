import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

// Example function to compute initial value (expensive calculation)
const calculateInitialValue = () => {
    return Math.floor(Math.random() * 100); // Simulates a heavy calculation
};

const CounterApp = () => {
    // Use a callback function to set the initial value for `count`
    const [count, setCount] = useState(() => calculateInitialValue());

    return (
        <View style={{padding: 20}}>
            <Button title="Increase" onPress={() => setCount(count + 1)}/>
            <Button title="Reset" onPress={() => setCount(() => calculateInitialValue())}/>
            <Text>Initial Random Count: {count}</Text>
        </View>
    );
};

export default CounterApp;

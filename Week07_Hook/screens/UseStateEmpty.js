import React, {useState} from 'react'
import {View, Text, Button} from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

const DiceRollApp = () => {
    const [diceRolls, setDiceRolls] = useState([])
    return (
        <View style={{padding: 20}}>
            <Button
                title="Roll dice!"
                onPress={() => {
                    setDiceRolls([...diceRolls, randomDiceRoll()])
                }}
            />
            <Text>
                Result: {diceRolls.join(', ')}
            </Text>
        </View>
    )
}

export default DiceRollApp;

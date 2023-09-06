import { View, Button } from "react-native"
import React, { useState} from "react"

export default function Toggle(){
    const [isOn, setIsOn] = useState(false)
    return (
        <View>
            <Button title={isOn ? 'Reset' : 'Start'} />
        </View>
    )
}
import { View, Text, StyleSheet } from "react-native"
import React,{ useRef, useState} from "react"
import Toggle from "./Toggle";

export default function Clock(){
    const [seconds, setSeconds] = useState(0)
    const timerRef = useRef()

    const start = () => {
        const id = setInterval(()=> {
            setSeconds(prevState => prevState + 1)
        },1000)
        timerRef.current = id
    }

    const stop = () => {
        clearInterval(timerRef.current)
    }

    const formatSecondsToTime = () => {
        const secondsInt = parseInt(seconds, 10)
        const hrs = String(Math.floor(secondsInt / 3600))
        const mins = String(Math.floor((secondsInt / 60) % 60))
        const snds = String(secondsInt % 60)
        return `${hrs.padStart(2,'0')}.${mins.padStart(2,'0')}.${snds.padStart(2,'0')}`
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.display}>{formatSecondsToTime()}</Text>
            <Toggle start={start} reset={stop} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    display: {
        fontSize: 24,
        marginBottom: 20
    }
});
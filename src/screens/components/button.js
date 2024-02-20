import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function CustomButton({onPress, text, type}){
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width: wp(85),
        backgroundColor: '#fb3c3b',

        padding: 10,
        marginVertical: 15,

        alignItems: 'center',
        borderRadius: 5,
    },
    text:{
        color: 'white',
        fontWeight: 'bold'
    
    }
})
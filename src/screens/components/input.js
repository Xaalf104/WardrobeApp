import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function CustomInput({placeholder, secureTextEntry}){

    return(
        <View style={styles.container}>
            <TextInput placeholderTextColor={'white'} placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        backgroundColor: '#F93a39',
        width: '85%',
        height: '7%',
        flexDirection:'row',

        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 30,
        elevation: 8,
    },
    input: {
        marginLeft: 15,
    },
})
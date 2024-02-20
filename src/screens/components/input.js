import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function CustomInput({placeholder, secureTextEntry}){

    return(
        <View style={styles.container}>
            <TextInput placeholderTextColor={'#553e21'} placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        backgroundColor: '#F5f5f5',
        width: wp(85),
        height: hp(5),
        flexDirection:'row',

        borderColor: '#F5f5f5',
        borderWidth: 1.5,
        borderRadius: 5,
        elevation: 8,
    },
    input: {
        marginLeft: 15,
    },
})
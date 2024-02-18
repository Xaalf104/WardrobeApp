import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView} from 'react-native';
import Logo from '../../assets/images/wardrobe-circle.png';
import CustomInput from './components/input';

const Login = () => {
    const {height} = useWindowDimensions();
    return(
        <>
        <SafeAreaView style={styles.root}>
            <Image source={Logo} style={styles.logostyle} resizeMode='contain'/>
            <CustomInput placeholder={"Email"}/>
            <CustomInput placeholder={"Password"} secureTextEntry={true}/>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    root: {
        paddingVertical: 80,
        alignItems:'center'
    },
    logostyle: {
        width: '70%',
        maxHeight: 200,
        maxWidth: 300,
        alignSelf: 'center',
        margin: 30
    },
    headerText: {
        fontSize: 35,
        textAlign: 'center',
        paddingVertical: 60,
        color: 'white',
    },
    emailText:{
        textAlign: 'left'
    }
});


export default Login;
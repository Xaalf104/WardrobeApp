import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import Logo from '../../assets/images/wardrobe-circle.png';
import GoogleLogo from '../../assets/images/Google_Icons.png';
import CustomInput from './components/input';
import CustomButton from './components/button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const {height, weight} = Dimensions.get('window')
const Login = () => {
    const {height} = useWindowDimensions();
    return(
        <>
        <SafeAreaView style={styles.root}>
            <Image source={Logo} style={styles.logostyle} resizeMode='contain'/>
            <View style={styles.form}>
                <CustomInput placeholder={"Email"}/>
                <CustomInput placeholder={"Password"} secureTextEntry={true}/>
                <CustomButton text={'Log In'}/>
                <Text style={styles.orText}>Forgot your password?</Text>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.withGoogleButton}>
                    <Image source={GoogleLogo} style={styles.withGoogleIcon} resizeMode='stretch'>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.orText}>Don't have an account?</Text>
            </View>
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
        width: wp(70),
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
    orText:{
        color: 'white',
        fontSize: 15,
        margin: 10
    },
    withGoogleIcon:{
        height: 37,
        width: 37,
    },
    withGoogleButton:{
        width: wp(85),
        backgroundColor: 'white',

        padding: 2,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 5,
    },
    line:{
        width: wp(65),
        height: 2,
        backgroundColor: '#fb3c3b',
        margin: 10
    },
    form:{
        alignItems: 'center',
        margin: 50,
        width: wp(85)
    }
    
});


export default Login;
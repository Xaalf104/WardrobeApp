import {View, Text, StyleSheet, Pressable} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-ico-universalicons';
import Icon2 from 'react-native-ico-material-design';
import React, {useState} from 'react';

var iconHeight = 17;
var iconWidth = 17;

export default function navbar(){

    const [iconColor, setIconColor] = useState('#FFFFFF');

    const handlePress = () => {
      const newColor = iconColor === '#FFFFFF' ? 'black' : '#FFFFFF';
      setIconColor(newColor);
    };
    {/*add backgorund to button when pressed */}
    return(
        <>
            <View style={styles.navbarBg}>
                <View style={styles.navBar}>
                    <Pressable style={styles.IconBehave} android_ripple={{borderless:true, radius: 20}}>
                        <Icon name="home" height={iconHeight} width={iconWidth} color='#FFFFFF'/>
                    </Pressable>
                    <Pressable style={styles.IconBehave} android_ripple={{borderless:true, radius: 20}}>
                        <Icon name="emoticon-in-love-of-square-face-shape" height={iconHeight} width={iconWidth} color='#FFFFFF'/>
                    </Pressable>
                    <Pressable style={styles.IconBehave} android_ripple={{borderless:true, radius: 20}}>
                        <Icon2 name="add-plus-button" height={30} width={30} color='#FFFFFF'/>
                    </Pressable>
                    <Pressable style={styles.IconBehave} android_ripple={{borderless:true, radius: 20}}>
                        <Icon name="cogwheel" height={iconHeight} width={iconWidth} color='#FFFFFF'/>
                    </Pressable>
                    <Pressable onPress={handlePress} style={styles.IconBehave} android_ripple={{borderless:true, radius: 20}}>
                        <Icon2 name="round-account-button-with-user-inside" height={iconHeight} width={iconWidth} color={iconColor}/>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    navbarBg:{
        flex: 1,
        backgroundColor: '#B40B0B',
        width: wp(100),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    navBar:{
        flexDirection: 'row',
        width:'100%',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    IconBehave:{
        padding: 14
    }
})
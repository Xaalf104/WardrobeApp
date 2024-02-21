import react from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Card(){
    return(
        <View style={styles.cardBG}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/samples/Sample2.jpg')}></Image>
                <Text>Sweater</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut imperdiet felis. Donec in blandit neque. Etiam dignissim pulvinar faucibus. Quisque eget erat nec magna aliquam viverra. Integer at est a orci condimentum porttitor. </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBG: {
        width: wp(45),
        height: hp(30),
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 7, 
    },
    imageContainer:{
        width: wp(40),
        height: hp(18),
        backgroundColor: 'gray',
        margin: 10,
        borderRadius: 10
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 1
    },
    desc:{
        flex: 1,
        height: '100%',
        width: '100%'
    }
})
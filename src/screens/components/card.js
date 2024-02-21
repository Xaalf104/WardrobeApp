import react from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Card(){
    return(
        <View style={styles.cardBG}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/samples/Sample2.jpg')}></Image>
                <Text numberOfLines={1} ellipsizeMode='tail'>Sweater</Text>
                <Text style={styles.desc} numberOfLines={3} ellipsizeMode='tail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut imperdiet felis. Donec in blandit neque. Etiam dignissim pulvinar faucibus. Quisque eget erat nec magna aliquam viverra. Integer at est a orci condimentum porttitor. </Text>
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
    imageContainer: {
        width: wp(40),
        height: hp(18),
        margin: 10,
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        borderColor: 'gray',
        borderWidth: 1
    },
    desc:{
        fontSize: 14,
        textAlign: 'left',
        marginTop: 5
    }
})
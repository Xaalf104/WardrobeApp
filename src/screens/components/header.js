import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function header(){
    return(
        <>
          <SafeAreaView style={styles.mainContainer}>
            <View style={styles.bg}>
                <View style={styles.searchBarcontainer}>
                    <View style={styles.profileIconContainer}>  
                        <Image style={styles.image} source={require('../../../assets/images/samples/jeff.png')}>

                        </Image>
                    </View>
                    <Text style={styles.searchtext}>Search...</Text>
                </View>
            </View>
            <View style={styles.navbarContainer}>
                <Text style={styles.choices}>All</Text>
                <Text style={styles.choices}>Upper</Text>
                <Text style={styles.choices}>Lower</Text>
                <Text style={styles.choices}>Footwear</Text>
            </View>
            <View style={styles.line}></View>
          </SafeAreaView>  
        </>
    )
}

const styles = StyleSheet.create ({
    mainContainer:{
        backgroundColor: 'black', 
        flex: 1,
        flexBasis: 1
    },
    bg:{
        backgroundColor: '#B40B0B',
        flex: 0.5,
        flexBasis: 0.5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute',
        bottom: 110,
        width: wp(100),
        height: hp(15)
    },
    searchBarcontainer: {
        marginTop: 60,
        backgroundColor: '#F5f5f5',
        width: wp(90),
        height: hp(5),
        alignSelf:'center',
        borderColor: '#F5f5f5',
        borderWidth: 1.5,
        borderRadius: 30,
        elevation: 8,
        flexDirection: 'row'
    },
    searchtext:{
        textAlign:'left',
        margin: 9,
        marginLeft: 7
    },
    profileIconContainer:{
        backgroundColor: 'darkgray',
        width: '9%',
        height: '90%',
        borderRadius: 80,
        marginTop: 2,
        marginLeft: 2
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        borderColor: 'gray',
        borderWidth: 1,
        resizeMode: 'contain'
    },
    navbarContainer:{
        backgroundColor: '#C6C2C2',
        width: wp(90),
        height: hp(4),
        alignSelf: 'center',
        marginTop: 150,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        rowGap: 50
    },
    line:{
        backgroundColor: 'white',
        width: wp(70),
        height: 2,
        alignSelf: 'center',
        margin: 15
    },
    choices:{
        textAlign: 'center',
        margin: 5,
        paddingLeft: 11,
        marginLeft: 30,
        fontWeight: 'bold'
    }
})
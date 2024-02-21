import react from "react";
import {View, Text, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Card from "./components/card";

export default function Home(){
    return(
        <>
        {/* main screen bg */}
        <View style={styles.background}> 
            {/* header */}
            <View style={styles.header}>
                <Text style={{textAlign: 'center'}}>Header</Text>
            </View>
            <View style={styles.body}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'black',
        flex: 1,
        flexDirection: 'column',
    },
    body:{
        flex: 6,
        backgroundColor: 'orange',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    header:{
        flex: 1.5,
        backgroundColor:'red'
    },
    cards:{
        width: '50%',
    }

}) 
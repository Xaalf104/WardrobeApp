import react from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Card from "./components/card";
import Header from "./components/header";
import Navbar from './components/navbar';

export default function Home(){
    return(
        <>
        {/* main screen bg */}
        <View style={styles.background}> 
            {/* header */}
            <View style={styles.header}>
                <Header/>
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
            <View style={styles.navbar}>
                <Navbar/>
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
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    header:{
        flex: 1.7,
    },
    cards:{
        width: '50%',
    },
    navbar:{
        flex: 0.3,
        flexDirection:'row'
    }
}) 
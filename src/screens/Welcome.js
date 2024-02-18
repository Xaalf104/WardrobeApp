import {View, Text, StyleSheet} from 'react-native'

export default function WelcomeScreen(){
    return(
        <View style={{flex:1}}>
            <Text style={styles.welcometext}>
                  Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcometext: {
        textAlign: 'center',
        padding:20,
        marginVertical: 8,
        fontSize:24
    }
})
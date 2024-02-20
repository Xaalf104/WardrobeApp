import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './src/screens/Login'
import Footer from './src/screens/components/footer'
import WelcomeScreen from './src/screens/Welcome';

export default function App() {
  return (
    <>
    <LinearGradient style={styles.container} colors={['#333333', 'black']} locations={[0.1,0.8]}>
      <Login/>
      <StatusBar style="light"/>
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',

  },
});

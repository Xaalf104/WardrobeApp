import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './src/screens/Login';
import Footer from './src/screens/components/footer'
import WelcomeScreen from './src/screens/Welcome';

export default function App() {
  return (
    <>
    <LinearGradient style={styles.container} colors={['#F93a39', '#911413']}>
      <Login/>
      <StatusBar style="auto"/>
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

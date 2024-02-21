import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './src/screens/Login'
import Footer from './src/screens/components/footer'
import WelcomeScreen from './src/screens/Welcome';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <Home/>
      <StatusBar style="light"/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',

  },
});

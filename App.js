
import { ImageBackground, StyleSheet, Text } from 'react-native';
import StartGame from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#e88e27', '#72063c']} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/back.jpeg')} 
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage:{
    opacity:0.15
  }

});

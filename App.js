import { ImageBackground, Text } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode='cover'
      className='flex-1 opacity-100'
    >
      <StartGameScreen />
    </ImageBackground>
  );
}

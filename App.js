import { useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const PickedNumberHandler = (number) => {
    setUserNumber(number);
  };

  let screen = <StartGameScreen onPickNumber={PickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode='cover'
      className='flex-1 opacity-100'
    >
      <SafeAreaView className='flex-1 opacity-100'>{screen}</SafeAreaView>
    </ImageBackground>
  );
}

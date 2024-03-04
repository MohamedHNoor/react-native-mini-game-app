import { View, Text } from 'react-native';
import Title from '../components/Title';

const GameScreen = () => {
  return (
    <View className='flex-1 pt-10 px-6'>
      <Title text="Opponent's Guess" />
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + -  */}
      </View>
      <View>{/* Log rounds */}</View>
    </View>
  );
};

export default GameScreen;

import { useState } from 'react';
import { TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = ({ onPickNumber }) => {
  const [inputNumber, setInputNumber] = useState('');

  const inputNumberHandler = (number) => {
    setInputNumber(number);
  };

  const resetHandler = () => {
    setInputNumber('');
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(inputNumber);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      // show alert
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Ok', style: 'destructive', onPress: resetHandler }]
      );
      return;
    }
    onPickNumber(chooseNumber);
  };

  return (
    <View className=' p-8 mt-24 bg-fuchsia-700 mx-6 rounded-lg'>
      <TextInput
        className='h-[50] w-[100] text-3xl text-center border-b border-fuchsia-50 text-fuchsia-50 mb-6 font-bold self-center'
        maxLength={2}
        keyboardType='number-pad'
        onChangeText={inputNumberHandler}
        value={inputNumber}
      />
      {/* buttons */}
      <View className='flex-row justify-center items-center gap-2'>
        <View className='flex-1'>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View className='flex-1'>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

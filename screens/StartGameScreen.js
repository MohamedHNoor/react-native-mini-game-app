import { TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View className=' p-8 mt-24 bg-fuchsia-700 mx-6 rounded-lg'>
      <TextInput
        className='h-[50] w-[100] text-3xl text-center border-b border-fuchsia-50 text-fuchsia-50 mb-6 font-bold self-center'
        maxLength={2}
        keyboardType='number-pad'
      />
      {/* buttons */}
      <View className='flex-row justify-center items-center gap-2'>
        <View className='flex-1'>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View className='flex-1'>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

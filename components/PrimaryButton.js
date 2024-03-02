import { Text, View, Pressable } from 'react-native';

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('pressed!!');
  };
  return (
    <Pressable onPress={pressHandler}>
      <View className='bg-fuchsia-500 rounded-full py-3 px-6'>
        <Text className='text-center text-fuchsia-50 text-xl font-semibold'>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

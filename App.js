import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-blue-200'>
      <Text className='text-red-500'>Hello world</Text>
      <StatusBar style='auto' />
    </View>
  );
}

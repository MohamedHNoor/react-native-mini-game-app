import { View, Text } from 'react-native';
import React from 'react';

const Title = ({ text }) => {
  return (
    <Text
      className='text-3xl p-2 text-center font-bold text-fuchsia-700'
      style={{ borderWidth: 2, borderColor: '#a21caf' }}
    >
      {text}
    </Text>
  );
};

export default Title;

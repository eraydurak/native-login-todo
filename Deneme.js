import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

const Deneme = ({ name }) => {
  console.log(name);
  return (
    <View>
      <Text>
        {name}
      </Text>
    </View>
  )
}

export default Deneme

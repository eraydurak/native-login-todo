import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, TextInput, SafeAreaView } from 'react-native';

const TodoPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstEllipse}>
      </View>
      <View style={styles.secondEllipse}>
      </View>
      <View style={styles.todoUp} >
        <Image source={require('./assets/pp.svg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  firstEllipse: {
    position: 'absolute',
    width: 122,
    height: 122,
    top: -21.24,
    left: -47.04,
    backgroundColor: 'rgba(106,224,217,0.5)',
    borderRadius: 150,
    zIndex: -2,
  },
  secondEllipse: {
    position: 'absolute',
    width: 143,
    height: 140,
    top: -70,
    left: 27.18,
    backgroundColor: 'rgba(106,224,217,0.5)',
    borderRadius: 150,
    zIndex: 5,
  },
  todoUp: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    backgroundColor: '#50C2C9',
    color: '#ffffff'
  }
})

export default TodoPage

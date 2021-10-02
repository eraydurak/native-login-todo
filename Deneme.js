import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Deneme = ({ navigation }) => {

  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.firstEllipse}>
      </View>
      <View style={styles.secondEllipse}>
      </View>
      <Image style={styles.landingPageImage} source={require('./assets/landingPagesvg.svg')} />
      <View style={styles.headers}>
        <Text style={styles.bigHeader}>
          Welcome Back !
        </Text>
      </View>
      <SafeAreaView style={styles.inputs}>
        <TextInput
          style={styles.input}
          onChangeText={name => setName(name)}
          placeholder="Please Enter Your Full Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Please Enter Your Full Name"
        />
      </SafeAreaView>
      <Text style={styles.forgotPassword}>
        Forgot Password?
      </Text>
      <Text onPress={() => navigation.navigate('Todo')} style={styles.startBtn}>
        Get Started
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    position: 'relative'
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
  landingPageImage: {
    width: 180,
    height: 168,
    marginTop: 220,
    marginBottom: 91,
  },
  startBtn: {
    color: '#ffffff',
    backgroundColor: '#50C2C9',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 12,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    cursor: 'pointer',
  },
  inputs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    width: '90%'
  },
  bigHeader: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 700,
    alignContent: 'center',
    marginBottom: 25,
  },
  forgotPassword: {
    color: '#24D0C6',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 10
  }
});

export default Deneme

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import NewPage from './NewPage';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstEllipse}>
      </View>
      <View style={styles.secondEllipse}>
      </View>
      <Image style={styles.landingPageImage} source={require('./assets/landingPagesvg.svg')} />
      <View style={styles.headers}>
        <Text style={styles.bigHeader}>
          Things To Do With TODO
        </Text>
      </View>
      <View style={styles.headersTwo}>
        <Text style={styles.smallParaghraphs}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper leo in eros parturient arcu odio diam. Gravida faucibus ac mauris et risus.
        </Text>
      </View>
      <Text onPress={() => <NewPage />} style={styles.startBtn}>
        Get Started
      </Text>
    </View>
  );
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
  headers: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  headersTwo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  bigHeader: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 700,
    alignContent: 'center',
    marginBottom: 25,
  },
  smallParaghraphs: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 500,
    paddingHorizontal: 50,
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
    marginTop: 65,
    cursor: 'pointer',
  }
});

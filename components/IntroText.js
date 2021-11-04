import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function IntroText() {

 
  return (
    <View>
      <Text style={styles.text}>Valoriza tu departamento con nuestro algoritmo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop:130
  }, 
  text: {
    alignItems: 'center', 
    color: '#24A9EB', 
    fontSize: 35,
    marginBottom: 35

  }
});

export default IntroText
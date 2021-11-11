import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './components/Index.js'

export default function App() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoad(false)
    }, 2000)
  },[])



  return (
    <View style={styles.screen}>
      { load ? <Text>Cargando..</Text> : <Index /> }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop:40
  }, 
  title: {
    alignItems: 'center', 
    color: 'blue', 
    fontSize: 30

  }
});

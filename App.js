import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/service/api';

export default function App() {

  const[cep, setCep] = useState(null)

  async function busxarCep(){
    try {
      const response = await api.get(`${cep}`/jason)
    } catch (error) {
      
    }
  }
  return (
    <View style={styles.container}>
      <Text>CEP</Text>
      <TextInput 

      />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

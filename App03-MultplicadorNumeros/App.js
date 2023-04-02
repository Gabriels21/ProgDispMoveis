import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

export default function App(){
  const [resultado, setResultado] = useState('');
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  function calcular(){

    if (( numero1 === '') || ( numero2 === '')){
      alert('É necessário digitar os valores!')
      return;
    }

    setResultado(numero1 *  numero2);

  }

    return(
      <View style={styles.container}>
        <View style={styles.containerMultiplicador}>

          <Text style={styles.titulo}>Multiplicador de Números</Text>

          <TextInput
          style={styles.input}
          placeholder="Digite o primeiro número"
          onChangeText={(valor) => setNumero1(valor)}
          keyboardType="numeric"
          />

          <TextInput
          style={styles.input}
          placeholder="Digite o segundo número"
          onChangeText={(valor) => setNumero2(valor)}
          keyboardType="numeric"
          />

          <View style={styles.containerButton}>
            <Pressable style={styles.button} onPress={calcular}>
              <Text style={styles.textoPressable}>Calcular</Text>
            </Pressable>
          </View>

           <View style={styles.containerResultado}>
              <Text style={styles.texto}> Resultado: {resultado}</Text>
          </View>

        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFF0'
  },
   containerMultiplicador:{
    marginTop: 300,
  },
  containerResultado:{
   marginTop: 50,
   marginLeft: 5,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 5
  },
  input:{
    height: 45,
    borderWidth: 2,
    borderColor: '#9ACD32',
    borderRadius: 5,
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  titulo:{
    fontSize: 30,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center'
  },
  containerButton:{
    alignItems:'center',
    justifycontetnt: 'center'
  },
  button:{
    width:395,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#9ACD32',
  },
  textoPressable:{
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
})



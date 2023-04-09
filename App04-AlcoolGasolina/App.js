import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable} from 'react-native';
import { styles } from './styles';

export default function App(){
  
  const [resultado, setResultado] = useState('');
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);

  function calcular(){

    if ( (alcool === '') || (gasolina === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    res = alcool / gasolina;

    if(res < 0.7){
      setResultado('Álcool');
    }else{
      setResultado('Gasolina');
    }

  }

    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <View style={styles.containerImagem}>
        <Image style={styles.imagem}
          source={require('./imagem/Combustiveis3.png')}
        />
      </View>

      <TextInput
      style={styles.inputA}
      placeholder="Digite o preço do Álcool"
      onChangeText={ (valor) => setAlcool(valor)}
      keyboardType="numeric"
      />

      <TextInput
      style={styles.inputB}
      placeholder="Digite o preço da gasolina"
      onChangeText={ (valor) => setGasolina(valor)}
      keyboardType="numeric"
      />

      <View style={styles.containerButton}>
        <Pressable style={styles.button} onPress={calcular}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>
      </View>

      <View style={styles.containerTexto}>
              <Text style={styles.texto}> {resultado} </Text>
      </View>
      
      </View>
    );
  }






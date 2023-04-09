import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable} from 'react-native';
import { styles } from './styles';

export default function App(){
  
  const [resultado, setResultado] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  function calcular(){

    if ( (peso === '') || (altura === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    res = peso / (altura * altura)

    if(res < 18.5){
      setResultado('Abaixo do peso');
    }
    else if(res <= 24.9){
      setResultado('Peso normal');
    }
    else if(res <= 29.9){
      setResultado('Sobrepeso');
    }
    else if(res <= 34.9){
      setResultado('Obesidade Grau 1');
    }
    else if(res <= 39.9){
      setResultado('Obesidade Grau 2');
    }else{
      setResultado('Obesidade Grau 3 ou Mórbida');
    }

  }

  return(
     <View style={styles.container}>
      <View style={styles.containerConteudo}>

        <Text style={styles.titulo}>IMC</Text>

        <View style={styles.containerImagem}>
          <Image style={styles.imagem}
            source={require('./imagem/imc.jpg')}
          />
        </View>

        <TextInput
        style={styles.inputA}
        placeholder="Digite o seu peso (70.5 Kg)"
        onChangeText={ (valor) => setPeso(valor)}
        keyboardType="numeric"
        />

        <TextInput
        style={styles.inputB}
        placeholder="Digite sua altura (1.70 M)"
        onChangeText={ (valor) => setAltura(valor)}
        keyboardType="numeric"
        />

        <View style={styles.containerButton}>
          <Pressable style={styles.button} onPress={calcular}>
            <Text style={styles.text}>Verificar</Text>
          </Pressable>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.texto}> {resultado} </Text>
        </View>
      </View>
    </View>
  );
}
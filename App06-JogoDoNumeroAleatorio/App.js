import React, { useState } from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import { styles } from './styles';

export default function App(){

  const [numeroAleatorio, setNumeroA] = useState('');

  function gerar(){

     setNumeroA(Math.floor(Math.random() * 10));

  }

    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Jogo do Número Aleatório</Text>

      <View style={styles.containerImagem}>
        <Image style={styles.imagem}
          source={require('./imagem/charada.png')}
        />
      </View>

      <Text style={styles.textDesc}>Pense em um número de 0 a 10</Text>

       <View style={styles.containerTexto}>
       <Text style={styles.texto}>{numeroAleatorio}</Text>
      </View>

      <View style={styles.containerButton}>
        <Pressable style={styles.button} onPress={gerar}>
          <Text style={styles.text}>Descobrir</Text>
        </Pressable>
      </View>
      
      </View>
    );
}
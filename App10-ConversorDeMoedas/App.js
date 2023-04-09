import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
 
export default function App(){
  
  const [valor, setValor] = useState(0);
  const [de, setDe] = useState(1);
  const [para, setPara] = useState(1);
  const [valorAtual, setValorAtual] = useState('');
  const [valorConvertido, setValorConvertido] = useState('');

  function converter(){

  if(valor > 0){
      
      //Real R$
      if(de == 1){
        setValorAtual("R$: " + valor + " é igual a: ");
        if(para == 1){
          setValorConvertido("€: " + (valor*0.18107).toFixed(2));
        }
        else if(para == 2){
          setValorConvertido("US$: " + (valor*0.19764).toFixed(2));
        }
        else if(para == 3){
          alert("Você não pode converter Real para Real");
        }
      }

       //Dólar US$
       if(de == 2){
        setValorAtual("US$: " + valor + " é igual a: ");
        if(para == 1){
          setValorConvertido("€: " + (valor*0.91500).toFixed(2));
        }
        else if(para == 2){
          alert("Você não pode converter Dólar para Dólar");
        }
        else if(para == 3){
          setValorConvertido("R$: " + (valor*5.05800).toFixed(2));
        }
      }

      //Euro €
      if(de == 3){
        setValorAtual("€: " + valor + " é igual a: ");
        if(para == 1){
           alert("Você não pode converter Euro para Euro");
        }
        else if(para == 2){
          setValorConvertido("US$: " + (valor*1.09200).toFixed(2));
        }
        else if(para == 3){
          setValorConvertido("R$: " + (valor*5.52500).toFixed(2));
        }
      }
  }

  }

    return(
      
      <ScrollView>

      <View style={styles.container}>
        <View style={styles.containerConteudo}>

          <Text style={styles.titulo}>Conversor de Moedas</Text>
          <Text style={styles.subTitulo}>R$ / US$ / € </Text>

          <Text style={styles.label}>Valor:</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(valor) => setValor(valor)}
          />

          <Text style={styles.label}>Converter de</Text>
          <Picker
            style={styles.picker}
            selectedValue={de}
            onValueChange={ (itemValue, itemIndex) => setDe(itemValue) }
          >
            <Picker.Item key={1} value="1" label="Real" />
            <Picker.Item key={2} value="2" label="Dólar" />
            <Picker.Item key={3} value="3" label="Euro" />
          </Picker>

          <Text style={styles.label}>Para</Text>
          <Picker style={styles.picker}
            selectedValue={para}
            onValueChange={ (itemValue, itemIndex) => setPara(itemValue) }
          >
            <Picker.Item key={1} value="1" label="Euro" />
            <Picker.Item key={2} value="2" label="Dólar" />
            <Picker.Item key={3} value="3" label="Real" />
          </Picker>

          <View style={styles.containerButton}>
          <Pressable style={styles.button} onPress={converter}>
            <Text style={styles.textButton}>Converter</Text>
          </Pressable>
          </View>
        
          <View style={styles.resultado}>
            <Text style={styles.textResultado}>{valorAtual}</Text>
            <Text style={styles.textResultadoFinal}>
            {valorConvertido}</Text>
          </View>

        </View>
    </View>

      </ScrollView>
    );
}
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView, Pressable} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
export default function App(){
  
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridadde] = useState('Ensino Médio');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);

  const [resultadoNome, setResultadoNome] = useState('');
  const [resultadoIdade, setResultadoIdade] = useState('');
  const [resultadoSexo, setResultadoSexo] = useState('');
  const [resultadoEscolaridade, setResultadoEscolaridade] = useState('');
  const [resultadoLimite, setResultadoLimite] = useState('');
  const [resultadoBrasileiro, setResultadoBrasileiro] = useState('');

  function confirmar(){
    setResultadoNome(nome);
    setResultadoIdade(idade);
    setResultadoSexo(sexo);
    setResultadoEscolaridade(escolaridade);
    setResultadoLimite(limite + ',00');
    if(brasileiro == true){
        setResultadoBrasileiro('Brasileiro');
    }else{
      setResultadoBrasileiro('Estrangeiro');
    }
      
  }

    return(
      
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.containerConteudo}>
          <Text style={styles.titulo}>Abertura de Conta</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={(valor) => setNome(valor)}
          />
          
          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(valor) => setIdade(valor)}
            
          />

          <Text style={styles.label}>Sexo</Text>
          <Picker
            selectedValue={setSexo}
            onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
          >
            <Picker.Item key={1} value='Masculino' label="Masculino" />
            <Picker.Item key={2} value='Feminino' label="Feminino" />
          </Picker>

          <Text style={styles.label}>Escolaridade</Text>
          <Picker style={styles.picker}
            selectedValue={setEscolaridadde}
            onValueChange={ (itemValue, itemIndex) => setEscolaridadde(itemValue) }
          >
            <Picker.Item key={1} value='Ensino Médio Completo' label="Ensino Médio Completo" />
            <Picker.Item key={2} value='Ensino Médio Incompleto' label="Ensino Médio Incompleto" />
            <Picker.Item key={3} value='Ensino Superior Completo' label="Ensino Superior Completo" />
            <Picker.Item key={4} value='Ensino Superior Incompleto' label="Ensino Superior Incompleto" />
          </Picker>

          <Text style={styles.label}>Limite desejado</Text>
          <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(value) => setLimite(value)}
          value={limite}
          step={100}
          thumbTintColor='#1E90FF'
          style={styles.sliderInput}
          />
          <Text style={styles.limite}>R$: {limite},00</Text>

          <View style={styles.switchN}>
            <Text style={styles.labelInput}>Brasileiro</Text>
            <Switch style={styles.switchIn}
            value={brasileiro}
            onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}
            thumbColor='#1E90FF'
            />
          </View>

          <View style={styles.containerButton}>
          <Pressable style={styles.button} onPress={confirmar}>
            <Text style={styles.text}>Confirmar</Text>
          </Pressable>
          </View>


          <View style={styles.resultado}>
            <Text style={styles.textoAbertura}>Dados da Abertura</Text>
            <Text style={styles.textoResultado}>Nome: {resultadoNome} </Text>
            <Text style={styles.textoResultado}>Idade: {resultadoIdade} </Text>
            <Text style={styles.textoResultado}>Sexo: {resultadoSexo} </Text>
            <Text style={styles.textoResultado}>Escolaridade: {resultadoEscolaridade} </Text>
            <Text style={styles.textoResultado}>Limite R$: {resultadoLimite} </Text>
            <Text style={styles.textoResultado}>Nacionalidade: {resultadoBrasileiro} </Text>
          </View>
          </View>
        </View>
        
      </ScrollView>
    );
}

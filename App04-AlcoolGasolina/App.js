import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Pressable} from 'react-native';
import { styles } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      alcool: 0,
      gasolina: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }

  calcular(){

    if ( (this.state.alcool === '') || (this.state.gasolina === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    res = this.state.alcool / this.state.gasolina

    if(res < 0.7){
    this.setState({resultado: 'Resultado: '+ res + ' é melhor utilizar Álcool'});
    }else{
      this.setState({resultado: 'Resultado: '+ res + ' é melhor utilizar Gasolina'});
    }

  }

  render(){
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
      onChangeText={ (valor) => this.setState({alcool: valor})}
      keyboardType="numeric"
      />

      <TextInput
      style={styles.inputB}
      placeholder="Digite o preço da gasolina"
      onChangeText={ (valor) => this.setState({gasolina: valor})}
      keyboardType="numeric"
      />

      <View style={styles.containerButton}>
        <Pressable style={styles.button} onPress={this.calcular}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>
      </View>

      <View style={styles.containerTexto}>
              <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
      
      </View>
    );
  }
}

export default App;
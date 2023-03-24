import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Pressable} from 'react-native';
import { styles } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      peso: 0,
      altura: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }

  calcular(){

    if ( (this.state.peso === '') || (this.state.altura === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    res = this.state.peso / (this.state.altura * this.state.altura)

    if(res < 18.5){
    this.setState({resultado: 'Abaixo do peso'});
    }
    else if(res <= 24.9){
    this.setState({resultado: 'Peso normal'});
    }
    else if(res <= 29.9){
    this.setState({resultado: 'Sobrepeso'});
    }
    else if(res <= 34.9){
    this.setState({resultado: 'Obesidade Grau 1'});
    }
    else if(res <= 39.9){
    this.setState({resultado: 'Obesidade Grau 2'});
    }else{
      this.setState({resultado: 'Obesidade Grau 3 ou Mórbida'});
    }

  }

  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>IMC</Text>

      <View style={styles.containerImagem}>
        <Image style={styles.imagem}
          source={require('./imagem/imc.jpg')}
        />
      </View>

      <TextInput
      style={styles.inputA}
      placeholder="Digite o seu peso (70.5 Kg)"
      onChangeText={ (valor) => this.setState({peso: valor})}
      keyboardType="numeric"
      />

      <TextInput
      style={styles.inputB}
      placeholder="Digite sua altura (1.70 M)"
      onChangeText={ (valor) => this.setState({altura: valor})}
      keyboardType="numeric"
      />

      <View style={styles.containerButton}>
        <Pressable style={styles.button} onPress={this.calcular}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>

      </View>
    );
  }
}

export default App;
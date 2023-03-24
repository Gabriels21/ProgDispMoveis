import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      numero1: 0,
      numero2: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){

    if ( (this.state.numero1 === '') || (this.state.numero2 === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    res = this.state.numero1 * this.state.numero2
    this.setState({resultado: 'Resultado: '+ res});
  }


  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Multiplicador de Números</Text>

      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número"
      onChangeText={ (valor) => this.setState({numero1: valor})}
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número"
      onChangeText={ (valor) => this.setState({numero2: valor})}
      keyboardType="numeric"
      />

      <View style={styles.containerButton}>
        <Pressable style={styles.button} onPress={this.calcular}>
          <Text style={styles.textoPressable}>Calcular</Text>
        </Pressable>
      </View>

     
        <Text style={styles.texto}> {this.state.resultado} </Text>
  
      </View>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  area:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 2,
    borderColor: '#00000',
    borderRadius: 5,
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 20,
    marginTop: 300,
    color: '#1E90FF',
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
    backgroundColor: '#1E90FF',
  },
  textoPressable:{
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})


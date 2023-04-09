import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

export default function App(){
    return(
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: 'black', height:930}}>

            <View style={{alignItems:'center', justifycontetnt: 'center', marginTop: 2}}>
              <Text style={styles.tituloPrincipal}>Meu Perfil</Text>
            </View>

            <View style={{alignItems:'center', justifycontetnt: 'center', marginTop: 25}}>
              <Image
                source={{ uri:'https://avatars.githubusercontent.com/u/92961406?v=4'}}
                style={styles.imagem}
              />
            </View>

            <Text style={styles.titulos}>
            Dados Pessoais:</Text>
              <View style={{margin: 5, height:120, backgroundColor: 'black', borderColor:'white', borderWidth:5, borderRadius: 15}}>
                  <Text style={styles.dadosPessoais}>Nome: Gabriel dos Santos Santana 
                  </Text>
                  <Text style={styles.dadosPessoais}>Idade: 19 anos 
                  </Text>
                  <Text style={styles.dadosPessoais}>Cidade: Itanhaém, SP 
                  </Text>
              </View>


            <Text style={styles.titulos}>
            Formação:</Text>
              <View style={{margin: 5, height:175, backgroundColor: 'black', borderColor:'white', borderWidth:5, borderRadius: 15}}>
                  <Text style={styles.titulosForm}>ETEC Itanháem 
                  </Text>
                  <Text style={styles.formacao}>ETIM-Informática para Internet 2018-2020 
                  </Text>
                  <Text style={styles.titulosForm}>FATEC Praia Grande
                  </Text>
                  <Text style={styles.formacao}>Análise e Desenvolvimento de Sistemas 2021-2023
                  </Text>
              </View>


            <Text style={styles.titulos}>
            Projetos:</Text>
              <View style={{margin: 5, height:155, backgroundColor: 'black', borderColor:'white', borderWidth:5, borderRadius: 15}}>
                  <Text style={styles.titulosProj}>TCC 
                  </Text>
                  <Text style={styles.projetos}>Trampo Certo 
                  </Text>
                  <Text style={styles.titulosProj}>GitHub
                  </Text>
                  <Text style={styles.projetos}>https://github.com/Gabriels21
                  </Text>
              </View>

      </View>
      </ScrollView>
    </SafeAreaView>
    )
  }

const styles = StyleSheet.create({

  tituloPrincipal: {
    color: 'white',
    fontSize: 25,
    margin: 15
  },

  titulos: {
    color: 'white',
    fontSize: 19,
    margin: 15
  },

  titulosForm: {
    color: '#00bfff',
    fontSize: 18,
    margin: 5
  },

  titulosProj: {
    color: '#00bfff',
    fontSize: 18,
    margin: 5
  },

  imagem: {
    width: 180, 
    height: 180, 
    borderRadius: 150
  },

  dadosPessoais: {
    color: 'white',
    fontSize: 18, 
    margin: 5
  },

  projetos:{
    color: 'white',
    fontSize: 18, 
    margin: 5
  },

  formacao: {
    color: 'white',
    fontSize: 18, 
    margin: 5
  }

});
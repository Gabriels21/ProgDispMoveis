import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text,Pressable } from 'react-native';
import { styles } from './styles';

export default function App(){
    return(

      <View style={styles.container}>
        <ScrollView style={styles.scrollV}>

          <View style={styles.tituloP}>
            <Text style={styles.titulo1}>VagasTI.com</Text>
          </View>

          <View style={styles.box}>

            <View style={styles.viewTitulo}>
              <Text style={styles.titulo}>Scrum Master</Text>
            </View>

             <View style={styles.labelV}>
                <Text style={styles.empresa}>Empresa</Text>
                <Text style={styles.texto}>Google</Text>
             </View>
            
             <View style={styles.labelV}>
                <Text style={styles.desc}>Descrição</Text>
                <Text style={styles.textoDesc}>Ser um Scrum Master em um projeto que está sendo desennvolvido.</Text>
             </View>

             <View style={styles.labelV}>
                <Text style={styles.salario}>Salário</Text>
                <Text style={styles.textoSalario}>R$: 10.000</Text>
             </View>

             <View style={styles.labelV}>
                <Text style={styles.requisitos}>Requisitos</Text>
                <Text style={styles.textoRequisitos}>PSM1 e SPS</Text>
             </View>
             

             <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={this.comprar}>
                  <Text style={styles.textButton}>Candidatar-se</Text>
                </Pressable>
             </View>
          </View>

          <View style={styles.box}>

             <View style={styles.viewTitulo}>
              <Text style={styles.titulo}>Desenvolvedor Mobile</Text>
            </View>

             <View style={styles.labelV}>
                <Text style={styles.empresa}>Empresa</Text>
                <Text style={styles.texto}>Microsoft</Text>
             </View>
            
             <View style={styles.labelV}>
                <Text style={styles.desc}>Descrição</Text>
                <Text style={styles.textoDesc}>Desenvolver telas (backend e frontend) para dispositivos móveis.</Text>
             </View>

             <View style={styles.labelV}>
                <Text style={styles.salario}>Salário</Text>
                <Text style={styles.textoSalario}>R$: 5.000</Text>
             </View>

              <View style={styles.labelV}>
                <Text style={styles.requisitos}>Requisitos</Text>
                <Text style={styles.textoRequisitos}>React Native, Node.js e Vue.js</Text>
             </View>

             <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={this.comprar}>
                  <Text style={styles.textButton}>Candidatar-se</Text>
                </Pressable>
             </View>
          </View>

          <View style={styles.box}>

            <View style={styles.viewTitulo}>
              <Text style={styles.titulo}>Analista de Dados</Text>
            </View>

             <View style={styles.labelV}>
                <Text style={styles.empresa}>Empresa</Text>
                <Text style={styles.texto}>IBM</Text>
             </View>
            
             <View style={styles.labelV}>
                <Text style={styles.desc}>Descrição</Text>
                <Text style={styles.textoDesc}>Analisar dashbords para a tomada de decisões dos gerentes.</Text>
             </View>

             <View style={styles.labelV}>
                <Text style={styles.salario}>Salário</Text>
                <Text style={styles.textoSalario}>R$: 7.000</Text>
             </View>

              <View style={styles.labelV}>
                <Text style={styles.requisitos}>Requisitos</Text>
                <Text style={styles.textoRequisitos}>Power BI, Tableu ou Oracle BI</Text>
             </View>

             <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={this.comprar}>
                  <Text style={styles.textButton}>Candidatar-se</Text>
                </Pressable>
             </View>
          </View>

          <View style={styles.ajuste}>
          </View>
        </ScrollView>
      </View>
    )
} 
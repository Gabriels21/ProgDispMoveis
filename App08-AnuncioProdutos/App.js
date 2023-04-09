import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text,Pressable } from 'react-native';
import { styles } from './styles';

export default function App(){
    return(
      <View style={styles.container}>

          <View style={styles.logo}>
            <Text style={styles.tituloLogo}>Halter Suplementos</Text>
            <Image style={styles.imagemLogo}
            source={require('./imagens/logo.png')}
            />
          </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.box}>
            <Text style={styles.titulo}>Whey Protein Max Titanium</Text>
            <Image style={styles.imagemProdutos}
            source={require('./imagens/wheyB.png')}
            />
            <Text style={styles.desc}>Delicioso suplemento proteíco
            ótimo para bater seus macros diários.</Text>
            <Text style={styles.preco}>R$: 100,00</Text>

             <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={this.comprar}>
                  <Text style={styles.text}>Comprar</Text>
                </Pressable>
             </View>
              
          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>Whey Protein Max Titanium</Text>
            <Image style={styles.imagemProdutos}
            source={require('./imagens/wheyB.png')}
            />
            <Text style={styles.desc}>Delicioso suplemento proteíco
            ótimo para bater seus macros diários.</Text>
            <Text style={styles.preco}>R$: 100,00</Text>
           
            <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={this.comprar}>
                  <Text style={styles.text}>Comprar</Text>
                </Pressable>
            </View>

          </View>
          
          <View style={styles.box}>
            <Text style={styles.titulo}>Whey Protein Max Titanium</Text>
            <Image style={styles.imagemProdutos}
            source={require('./imagens/wheyB.png')}
            />
            <Text style={styles.desc}>Delicioso suplemento proteíco
            ótimo para bater seus macros diários.</Text>
            <Text style={styles.preco}>R$: 100,00</Text>
           
            <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={this.comprar}>
                  <Text style={styles.text}>Comprar</Text>
                </Pressable>
            </View>

          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>Whey Protein Max Titanium</Text>
            <Image style={styles.imagemProdutos}
            source={require('./imagens/wheyB.png')}
            />
            <Text style={styles.desc}>Delicioso suplemento proteíco
            ótimo para bater seus macros diários.</Text>
            <Text style={styles.preco}>R$: 100,00</Text>
            
            <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={this.comprar}>
                  <Text style={styles.text}>Comprar</Text>
                </Pressable>
            </View>
         </View>
         
        </ScrollView>
      </View>
    )
}
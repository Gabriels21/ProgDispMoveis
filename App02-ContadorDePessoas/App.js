import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';


export default function App(){
  
  const [pessoas, setPessoas] = useState(0);
  
  function mais(){
    setPessoas(pessoas + 1)
  }

  function menos(){
     if(pessoas > 0){
       setPessoas(pessoas - 1)
     }
  }

    return(
      <View style={styles.container}>
        <View style={styles.containerContador}>

          <Text style={{fontSize: 35, textAlign: 'center', fontWeight: 'bold', marginBottom: 5}}>
            Contador de Pessoas
          </Text>

          <View style={styles.containerVisor}>
            <Text style={{fontSize: 100, color: '#DCDCDC', textAlign: 'center'}}>
              {pessoas}
            </Text>
          </View>

          <View style={styles.containerButton}>
                  <Pressable style={styles.button} onPress={mais}>
                    <Text style={styles.text}>+</Text>
                  </Pressable>
          </View>

          <View style={styles.containerButton}>
                  <Pressable style={styles.button2} onPress={menos}>
                    <Text style={styles.text}>-</Text>
                  </Pressable>
          </View>
        
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
   container:{
     flex: 1,
     backgroundColor: '#DCDCDC'
   },
    containerContador:{
     marginTop: 270
   },
   button:{
    width: 380,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'green',
    marginBottom: 5
  },
  button2:{
    width: 380,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'red',
  },
  containerButton:{
   alignItems: 'center',
   justifyContent: 'center',
  },
  containerVisor:{
   backgroundColor:'black',
   width:130,
   height:130,
   marginBottom: 10,
    marginLeft: 140,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30
  },
  text:{
    fontSize: 20,
    color: 'white'
  }

})



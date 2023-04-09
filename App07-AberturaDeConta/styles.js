import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white'
    },
    containerConteudo:{
     marginTop: 60
    },
    input:{
      height: 35,
      borderWidth: 2,
      borderColor: '#1E90FF',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      fontSize: 14,
      borderRadius:5,
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
      padding: 10,
      marginTop: 5
    },
    titulo:{
      fontSize: 25,
      color: 'black',
      alignSelf: 'center',
      marginTop: 15,
      fontWeight: 'bold',
    },
    label:{
      margin: 5,
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 15,
    },
    limite:{
      margin: 5,
      fontSize: 15,
      marginLeft: 15,
      alignSelf: 'center'
    },
    resultado:{
      marginTop: 30,
    },
    textoResultado:{
      textAlign: 'left',
      fontSize: 18,
      fontWeight: 'bold',
      padding: 10,
      marginTop: 5
    },
    switchN:{
      flexDirection: 'row',
      padding: 10
    },
    switchIn:{
      marginTop: -4,
      marginLeft: 250
    },
    labelInput:{
      margin: 5,
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 5,
    },
    textoAbertura:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10
    },
    containerButton:{
    alignItems:'center',
    justifycontetnt: 'center'
  },
  button:{
    width:380,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#1E90FF',
  },
  text:{
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  });

  export {styles};
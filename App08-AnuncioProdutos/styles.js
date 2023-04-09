import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#121212',
    paddingTop: 120
  },
   box:{
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#4F4F4F',
    borderColor: 'black',
    borderRadius:8,
    height: 450,
    width: 350,
    padding: 50
  },
  logo:{
    alignItems: 'center',
    padding: 10
  },
  imagemLogo:{
    width: 150,
    height: 150,
    borderRadius: 0
  },
  imagemProdutos:{
    width: 135,
    height: 230,
    marginLeft: 50,
  },
  tituloLogo:{
    fontSize: 22,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.20,
    color: 'white',
    marginBottom: 10,
    alignItems: 'center',
    marginLeft: 5
  },
  titulo:{
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginBottom: 15,
    alignItems: 'center',
    marginLeft: 5
  },
  desc:{
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'white',
    marginTop: 7,
    marginLeft: 0.1
  },
  preco:{
    fontSize: 25,
    letterSpacing: 0.25,
    color: 'white',
    marginTop: 9,
    fontWeight: 'bold'
  },
  text:{
     color: 'white',
     fontWeight: 'bold'
  },
   button:{
    width: 105,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#4169E1',
  },
  containerButton:{
    marginLeft: 140,
    marginTop: -40
   
  },
})


export {styles};
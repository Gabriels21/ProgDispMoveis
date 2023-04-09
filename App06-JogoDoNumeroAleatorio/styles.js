import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  area:{
    flex: 1,
     backgroundColor: '#DCDCDC'
  },
  containerImagem:{
    alignItems:'center',
    justifycontetnt: 'center',
    marginTop: 20
  },
  button:{
    width:300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#1E90FF',
  },
  containerButton:{
    alignItems:'center',
    justifycontetnt: 'center',
     marginTop: 20
  },
  text:{
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containerTexto:{
    alignItems:'center',
    justifycontetnt: 'center',
    marginTop: 20
  },
  texto:{
    textAlign: 'center',
    fontSize: 30,
  },
  textDesc:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 70,
    color: 'black',
    alignSelf: 'center'
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 170,
    color: 'black',
    alignSelf: 'center'
  },
  imagem:{
    width: 200,
    height: 200
  }
})

export {styles};
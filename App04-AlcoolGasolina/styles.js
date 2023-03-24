import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
     marginBottom: 20
  },
  containerImagem:{
    alignItems:'center',
    justifycontetnt: 'center',
    marginTop: 20
  },
  inputA:{
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#008000',
    placeholderTextColor: "#008000",
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  inputB:{
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ff0000',
    placeholderTextColor: "#ff0000",
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  button:{
    width:395,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'orange',
  },
  containerButton:{
    alignItems:'center',
    justifycontetnt: 'center'
  },
  text:{
    fontSize: 17,
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
    fontSize: 25,
  },
  titulo:{
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 170,
    color: '#6495ed',
    alignSelf: 'center'
  },
  imagem:{
    width: 200,
    height: 200
  }
})

export {styles};
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  containerConteudo:{
    marginTop: 130
  },
  containerImagem:{
    alignItems:'center',
    justifycontetnt: 'center',
    marginTop: 20
  },
  inputA:{
    height: 45,
    borderWidth: 2,
    borderColor: '#ff7f50',
    borderRadius: 5,
    placeholderTextColor: "#008000",
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  inputB:{
    height: 45,
    borderWidth: 2,
    borderColor: '#ff7f50',
    borderRadius: 5,
    placeholderTextColor: "#ff0000",
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  button:{
    width:380,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#ff7f50',
  },
  containerButton:{
    alignItems:'center',
    justifycontetnt: 'center'
  },
  containerText:{
    alignItems:'center',
    justifycontetnt: 'center',
    marginTop: 20
  },
  text:{
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 35,
    marginTop: 20,
    color: '#ff7f50',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  imagem:{
    width: 280,
    height: 200
  }
})

export {styles};
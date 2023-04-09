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
    height: 550,
    width: 400,
    padding: 50
  },
  titulo:{
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginBottom: 15,
    alignItems: 'center',
    marginLeft: 40,
    marginTop: -18
  },
  textButton:{
     color: 'white',
     fontWeight: 'bold',
  },
   button:{
    width: 260,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#008000',
  },
  containerButton:{
    marginLeft: -1,
    marginTop: 10
  },
  empresa: {
    backgroundColor: '#121212',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    color: 'white',
  },
  texto: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
    color: '#fff',
  },
  desc: {
    backgroundColor: '#121212',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    color: 'white',
  },
  textoDesc: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 18,
    color: 'white',
  },
  salario: {
    backgroundColor: '#121212',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    color: 'white',
  },
  textoSalario: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
    color: 'white',
  },
  requisitos:{
    backgroundColor: '#121212',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    color: 'white',
  },
  textoRequisitos: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
    color: 'white',
  },
  labelV:{
    marginTop: 2,
    marginBottom: 10
  },
})

export {styles};
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFF0',
    height: 780
  },
  containerConteudo:{
    marginTop: 130,
    backgroundColor: '#FFFFF0'
  },
    input:{
    height: 45,
    borderWidth: 2,
    borderColor: '#3CB371',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    fontSize: 19,
    borderRadius:5,
    padding: 10,
  },
  titulo:{
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  subTitulo:{
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    marginBottom: 15,
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
   marginTop: 50,
   backgroundColor:'#3CB371',
   width:200,
   height:100,
   marginBottom: 10,
   marginLeft: 100,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30
  },
  textResultado:{
   fontSize: 20,
   marginTop: 5,
   color: 'black'
  },
  textResultadoFinal:{
   fontSize: 20,
   marginTop: 5,
   color: 'black',
   fontWeight: 'bold'
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
    backgroundColor: '#3CB371',
  },
  textButton:{
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  picker:{
    backgroundColor: '#FFFFF0',
    marginLeft: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFF0', 
    color: 'black'
  }

  });

  export {styles};
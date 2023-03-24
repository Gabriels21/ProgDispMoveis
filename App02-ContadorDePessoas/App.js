import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas: 0
    };

    this.mais = this.mais.bind(this);
    this.menos = this.menos.bind(this);
  }
  
  mais(){
    this.setState({
      pessoas: this.state.pessoas + 1
    });
  }

  menos(){
     if(this.state.pessoas > 0){
    this.setState({
     pessoas: this.state.pessoas - 1
    });
     }
  }


  render(){
    return(

      
      <View style={{ marginTop: 50 }}>

        <Text style={{fontSize: 35, textAlign: 'center'}}>
          Contador de Pessoas
        </Text>

        <Text style={{fontSize: 100, color: 'red', textAlign: 'center'}}>
          {this.state.pessoas}
        </Text>

        <Button color ='green' title="+" onPress={this.mais}/>
        
        <Button color ='red' title="-" onPress={this.menos} />


      </View>
    )
  }
}


export default App;

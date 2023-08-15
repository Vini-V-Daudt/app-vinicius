import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';


export default class HomeScreen extends React.Component {

  render(){
    return(
      <View style={{alignSelf:'center', marginTop:150}}>
        <Text style={styles.text}>  INICIO  </Text>
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
                      onPress={()=>this.props.navigation.navigate('AlarmClock')}>

            <Text style={styles.buttonText}>Alarme</Text>
            
          </TouchableOpacity>
           <TouchableOpacity 
            style={[styles.button,{backgroundColor:"gray"}]} 
                      onPress={()=>this.props.navigation.navigate('SobreMim')}>

            <Text style={styles.buttonText}>Sobre os criadores do app</Text>
            
          </TouchableOpacity>
          
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black'
  },
  text:{
    fontSize: 60,
    fontFamily:'Uint32Array'
    
  }
})
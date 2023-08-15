import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class SobreMim extends React.Component {

render(){
  return (
    <View style={styles.view}>
       <Text style={styles.text1}> Sobre os </Text>
       <Text style={styles.text2}> criadores</Text>
       <Text style={styles.text1,{marginTop:250}}> texto </Text>
        <TouchableOpacity 
            style={[styles.buttonN,{backgroundColor:"white", marginTop: 180}]} 
                      onPress={()=>this.props.navigation.navigate('HomeScreen')}>

            <Text style={styles.buttonText}>Voltar</Text>
            
          </TouchableOpacity> 
    </View>
  )
}
}


const styles = StyleSheet.create({
  view:{

    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonN:{
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
  text1:{
    fontFamily:'Uint8ClampedArray',
    fontSize:40,
    color:'black',
    
    
  },
   text2:{
    fontFamily:'Uint32Array',
    fontSize:60,
    color:'red',
    
    
  }
});




import React, { useState, useEffect } from 'react';
import { View, Text, Button, TimePickerAndroid ,StyleSheet, TouchableOpacity, Image} from 'react-native';

const AlarmClock = () => {
  const [alarmTime, setAlarmTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const showTimePicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 0,
        minute: 0,
        is24Hour: true,
      });

      if (action !== TimePickerAndroid.dismissedAction) {
        setAlarmTime(new Date().setHours(hour, minute));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  };

  const isAlarmTime = alarmTime && currentTime >= alarmTime;

  return (
    <View style={{ flex: 1, alignItems: 'center', marginBottom:100,  marginTop:100 }}>
      <Text style={{ fontSize: 40, marginBottom: 0, fontFamily:'Uint16Array',  }}>
        {isAlarmTime ? 'Hora do Alarme!' : 'Definir Alarme'}
      </Text>

   <Image source={require('../assets/00.jpeg')} style={{ width: '50%', height: '40%' }} />


      {!alarmTime ? (
      <TouchableOpacity style = {styles.button} onPress={showTimePicker}>
      <Text style={styles.text}>Definir Alarme</Text>
      </TouchableOpacity>
      ) : (
        <Text style={{ fontSize: 18 }}>
          Alarme definido para {alarmTime.toLocaleTimeString()}
        </Text>
      )}

        <TouchableOpacity 
            style={[styles.buttonN,{backgroundColor:"white", marginTop: 100}]} 
                      onPress={()=>this.props.navigation.navigate('HomeScreen')}>

            <Text style={styles.buttonText}>Voltar</Text>
            
          </TouchableOpacity> 
    </View>
  );
};

export default AlarmClock;
const styles = StyleSheet.create({
  
  button: {
    padding:60,
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
    backgroundColor: 'red',
    marginTop:30
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
  text:{
    fontSize:40,
    color:'white'
    
  }
});




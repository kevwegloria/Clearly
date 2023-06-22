import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ResetPassword2 = () => {

    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const handleNewPassword = (text) => {
        setNewPassword(text);
    };
    const handleConfirmedPassword = (text) => {
        setConfirmedPassword(text);
    };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
         <View
      style={{
        marginTop: 50,
        marginLeft: 20,
        flexDirection: 'row'
        }}>
      <Icon
        name="arrow-left"
        onPress={() => navigation.navigate('ResetPassword1')}
        style={{
        fontSize: 25,
        color: "black",
        }} />
     
    </View> 
    <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <Image           
        resizeMode='contain'
        source={require('../images/reset2.png')}
        style={{ height:250, width: 250, marginBottom: 45 }}
       />
    </View>

    <View  
    style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <Text 
        style={{fontWeight: 800, fontSize: 20, marginBottom: 50}}>Reset Password?</Text>
       
    </View>
    <View>
    <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={handleNewPassword}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Confirmed Password"
        value={confirmedPassword}
        onChangeText={handleConfirmedPassword}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
    </View>
    <View>
        <Text
        style= {{height: 50,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#05509b',
            textAlign: 'center',
            backgroundColor: '#05509b',
            color: 'white',
            padding: 10,
            marginBottom: 10}}
         onPress={() => navigation.navigate('ResetPassword2')}
        >
          Reset Password  
        </Text>
    </View>

    <View>
       <Image 
        resizeMode='contain' 
        source={require('../images/Rectangle.png')} 
        style={{marginTop: 35}} />
     </View> 
    </SafeAreaView>
  )
}

export default ResetPassword2
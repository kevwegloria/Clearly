import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ResetPassword1 = ({ navigation }) => {
    
        const [code, onChangeText] = React.useState('');

        const handleChangeText = (text) => {
            onChangeText(text)
        }
      
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
          <View
      style={{
        marginTop: 46,
        marginLeft: 20,
        flexDirection: 'row'
        }}>
      <Icon
        name="arrow-left"
        onPress={() => navigation.navigate('SignUp')}
        style={{
        fontSize: 25,
        color: "black",
        }} />
     
    </View>

    <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <Image           
        resizeMode='contain'
        source={require('../images/reset1.png')}
        style={{ height:250, width: 250, marginBottom: 45 }}
       />
    </View>

    <View  style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <Text style={{fontWeight: 800, fontSize: 20, marginBottom: 50}}>Reset Password?</Text>
       
    </View>

    <View style={{marginLeft: 'auto', marginRight: 'auto'}}> 
        <Text style={{width:300, textAlign: 'center', color: '#9d9d9d', marginBottom: 20}}>Input the 6 digits code sent to your phone number/Email</Text>
    </View>

    <View>
    <TextInput
        style={{height: 50,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#05509b',
            padding: 10,
            marginBottom: 20}}
            placeholder='Code'
        onChangeText={handleChangeText}
        value={code}
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
          Next  
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

export default ResetPassword1
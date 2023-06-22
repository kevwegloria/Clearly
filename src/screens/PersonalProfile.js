import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { View, TextInput, Image, Text } from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PersonalProfile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleBirthdateChange = (text) => {
    setBirthdate(text);
  };

  const handleCountryChange = (text) => {
    setCountry(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = () => {
    // Handle form submission with form data
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Birth Date:', birthdate);
    console.log('Country:', country);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Agree to Terms:', agreeTerms);
  };

  return (
   <SafeAreaView style= {{backgroundColor: 'white', paddingTop: 60}}>
     <View>
        <Icon
          name="arrow-left"
          onPress={() => navigation.navigate('SignUp')}
          style={{
           fontSize: 25,
           marginLeft: 10,
           color: "black",
            }} />
    </View>
    <View>
        <Text style={{paddingTop: 10, marginLeft: 'auto', marginRight: 'auto', fontSize: 20, fontWeight: 700, paddingBottom: 15}}>Personal Profile</Text>
    </View>
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={handleFirstNameChange}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Last Name                                         Other Name"
        value={lastName}
        onChangeText={handleLastNameChange}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Birth Date (mm/dd/yyyy)"
        value={birthdate}
        onChangeText={handleBirthdateChange}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Country"
        value={country}
        onChangeText={handleCountryChange}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
        style={{borderWidth:1, borderColor: '#05509b', width: 370, marginLeft: 'auto', marginRight: 'auto', padding: 10, borderRadius: 5, marginBottom: 20 }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 , width: 270, paddingLeft: 12}}>
        <CheckBox value={agreeTerms} onValueChange={handleCheckboxChange} />
        <Text style={{ marginLeft: 8 }}>tick the box to agree to Clearly app <Text>term and condition.</Text></Text>
      </View>
     
     <Text 
        onPress={handleSubmit}
        style={{backgroundColor: '#05509b', borderWidth: 1, paddingLeft: 120, paddingRight: 120, paddingTop: 10, paddingBottom: 10, color: 'white', marginLeft: 'auto', marginRight: 'auto', fontWeight: 600, }}
     >
        Agree and Continue
     </Text>

     <View>
       <Image 
        resizeMode='contain' 
        source={require('../images/Rectangle.png')} 
        style={{marginTop: 35}} />
     </View> 
    </View>
   </SafeAreaView>
  );
};

export default PersonalProfile;

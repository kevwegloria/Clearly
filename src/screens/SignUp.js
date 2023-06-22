import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable,SafeAreaView, Image  } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import {COLORS} from '../components/styles'

    
const SignUpScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const phoneInput = React.useRef(null);
   

    const OnPress = () => {
        if (phoneNumber.length !== 0) {
            Alert.alert(
                "Confirm Number",
                phoneNumber,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },

                    {
                        text: "OK",
                        onPress: () => console.log("OK Pressed"),
                    },
                ],
            );
        }
    };
 

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.primary}}>
            <View>
                <View
                    style={{
                        marginTop: 46,
                        marginLeft: 20,
                        flexDirection: 'row'
                    }}>
                    <Icon
                        name="arrow-left"
                        onPress={() => navigation.navigate('Onboarding1')}
                        style={{
                            fontSize: 25,
                            color: "white",
                        }} />
                    <Image
                   
                        resizeMode='contain'
                        source={require('../images/logo.png')}
                        style={{ marginLeft: 30, height:80 }}
                    />
                </View>
                {/* SignUp Container */}
                <View
                    style={{
                        paddingTop: 40,
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{color: 'white',fontSize: 21,fontWeight: 600 }}>SIGN UP
                    </Text>
                </View>

                <View style={styles.container}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '500',
                            paddingBottom: 5,
                            alignSelf: 'flex-start',
                            marginLeft: 20
                        }}>Phone:
                    </Text>

                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        containerStyle={styles.phoneContainer}
                        textContainerStyle={styles.textInput}
                        onChangeFormattedText={text => {
                            setPhoneNumber(text);
                        }}
                        defaultCode="IN"
                        layout='first'
                        withShadow
                        autoFocus
                    />

                    <Pressable
                        style={styles.button}
                        onPress={() => OnPress()}
                        android_ripple="red"
                    >
                        <Text style={styles.text1}>Send OTP</Text>
                    </Pressable>
                    <View style={{ marginTop: 31 }}>
                        <Text
                            style={{
                                color: 'white',
                                width: 350,
                                fontSize: 15
                            }}>A code will be sent to your registered number to verify your account and also to recover your password
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 27,
                        marginBottom: 35
                    }}>
                    <Text style={{ color: 'white', marginBottom: 30 }}>Continue</Text>
                    <Text style={{ color: 'white', marginBottom: 20  }}>or</Text>

                </View>

                 <View
                    style={{
                        position: 'relative',
                        width: 355,
                        marginLeft: 20,
                        gap: 5
                    }}>
                         <View 
                    
                    style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        height: 50,
                        borderRadius: 10,
                        gap: 30,
                        alignItems: 'center'
                    }}>
                    <Image
                        resizeMode='contain'
                        source={require('../images/gmail.png')}
                        style={{ marginLeft: 30 }}
                    />
                    <Text  style={styles.continueTexts}> Continue with Email</Text>
                </View> 
                 <View
                    style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        height: 50,
                        borderRadius: 10,
                        gap: 30,
                        alignItems: 'center'
                    }}>
                    <Image
                        resizeMode='contain'
                        source={require('../images/facebook.png')}
                        style={{ marginLeft: 30 }}
                    />
                    <Text 
                            onPress={() => navigation.navigate('WithFacebook')}
                    style={styles.continueTexts}> Continue with Facebook</Text>
                </View> 
                <View
                    style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        height: 50,
                        borderRadius: 10,
                        gap: 30,
                        alignItems: 'center'
                    }}>
                    <Image
                        resizeMode='contain'
                        source={require('../images/google.png')}
                        style={{ marginLeft: 30 }}
                    />
                    <Text 
                      onPress={() => navigation.navigate('WithGoogle')}
                      style={styles.continueTexts}> Continue with Google</Text>
                </View> 


                </View>
              
                  

                    
                </View>
                <View>
                    <Image 
                    resizeMode='contain' 
                    source={require('../images/Rectangle.png')} 
                    style={{}} />
                </View> 
               
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        alignItems: 'center',
    },

    phoneContainer: {
        width: '90%',
        height: 50,
        borderRadius: 10,
    },

    button: {
        marginTop: 30,
        width: '90%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e97fb0',
        borderRadius: 10,
    },

    textInput: {
        paddingVertical: 0,
        borderRadius: 10
    },

    text1: {
        color: COLORS.white,
        fontWeight: '600'
    },

    continueTexts:{
        color: COLORS.grey
    }

});

export default SignUpScreen;
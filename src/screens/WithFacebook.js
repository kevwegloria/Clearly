import { View, Text } from 'react-native'
import React from 'react'

const WithFacebook = ({ navigation }) => {
  return (
    <View>
        
      <Text
              onPress={() => navigation.navigate('Home')}
      >WithFacebook</Text>
    </View>
  )
}

export default WithFacebook
import { View, Text } from 'react-native'
import React from 'react'

const WithGoogle = ({navigation}) => {
  return (
    <View>
         
      <Text onPress={() => navigation.navigate('Home')} >With Google</Text>
    </View>
  )
}

export default WithGoogle
import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text
} from 'react-native';
import { COLORS, height } from '../components/styles'
// import HomeScreenheader from '../components/HomeScreenheader';
// import { HomeScreenContent } from '../components/HomeScreenContent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground
        source={require('../images/appBackground.png')}
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: height * 1.0,

        }}
      >
      

       

      </ImageBackground>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

})

export default HomeScreen
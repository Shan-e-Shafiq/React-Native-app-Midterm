import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable, TouchableHighlight, Touchable } from 'react-native'
import React from 'react'
import styles from '../StyleSheet'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";

export default function GetStartedScreen() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image style={[styles.GraphicImageReflected]} source={require('../assets/Graphic.png')} />
      <View style={styles.AnimatedGifContainer} >
        <Text style={{ fontSize: 36, fontWeight: 800 }}>Books App</Text>
        <LottieView style={{ width: 300, height: 300 }} source={require('../assets/Animations/LottieFilesLoginAnimation.json')} autoPlay loop />
      </View>
      <View style={styles.GetStartedBtnContainer}>

        <TouchableOpacity
          style={styles.GetStartedBtn}
          onPress={() => { navigation.navigate('BookScreen') }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Get Started</Text>
          {/* <Icon.UserPlus width={25} height={25} stroke={'white'} strokeWidth={2} /> */}
          <Icon.LogIn width={25} height={25} stroke={'white'} strokeWidth={2} />
        </TouchableOpacity>

        <Text
          style={{ textAlign: 'center', marginTop: 10, color: 'grey' }}
        >
          By creating account or logging in you agree to our <Text style={{ color: '#007FFF', textDecorationLine: 'underline', fontWeight: 'bold' }}>Terms & Condition</Text> and <Text style={{ color: '#007FFF', textDecorationLine: 'underline', fontWeight: 'bold' }}>Privacy Policy</Text>
        </Text>

      </View>
    </SafeAreaView>
  )
}
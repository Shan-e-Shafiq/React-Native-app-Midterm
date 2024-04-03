import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, FlatList, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../StyleSheet';
import useFetch from '../CustomHooks/useFetch';
import BookItem from '../Components/BookItem';

export default function GetStartedScreen() {

  // FUNCTIONS

  // VARIABLES
  const { books } = useFetch()
  const navigation = useNavigation();

  // CODE
  useEffect(() => {
    console.log('first render')
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image style={[styles.GraphicImageReflected]} source={require('../assets/Graphic.png')} />

      <SafeAreaView style={{ width: '100%', padding: 15, marginTop: 80 }}>
        <View style={styles.Controls}>
          <TextInput
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 100,
              padding: 10,
              width: 200
            }}
            placeholder='Search a book'
          ></TextInput>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderWidth: 1,
              borderRadius: 15,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderWidth: 1,
              padding: 10,
              borderRadius: 15,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>English</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            // <Text>{item.title}</Text>
            <BookItem key={item.id} data={item} />
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

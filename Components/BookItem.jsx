import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../StyleSheet'

export default function BookItem(props) {

  const { title, author, category } = props.data;

  return (
    <View style={styles.BookItemContainer}>
      <Image source={require("../assets/BookImg.jpg")} style={{ width: '100%' }}></Image>
      <View style={{ padding: 15, gap: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 18, }}><Text style={{ fontWeight: 'bold' }}>Author </Text>{author.name}</Text>
        <Text style={{ fontSize: 18, }}><Text style={{ fontWeight: 'bold' }}>Category </Text>{category.name}</Text>
      </View>
    </View >
  )
}
import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

import { Colors } from "../constants/Colors"
import { useColorScheme } from "react-native"
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import React from 'react'

const About = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText style={[styles.title, {color: theme.title}]}>About Page</ThemedText>

      <Link href="/" style={[styles.link, {color: theme.text}]}>Home Page</Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})
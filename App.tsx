import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello There</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0366D6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FCFCFC',
    color: '#FCFCFC'
  }
})

import React, { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Touchable, Button, Pressable, Alert, TextInput, ImageBackground } from 'react-native'
export default function App() {
  // const image = { require('Backgrounds\pexels-adrianna-calvo-364096.jpg') };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} >React<Text style={styles.text1}>App</Text></Text>
      <View style={styles.box}>
        <TextInput style={styles.input} placeholder={"Enter Email"} placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.box}>
        <TextInput style={styles.input} placeholder={"Enter Password"} placeholderTextColor="black" ></TextInput>
      </View>
      <Text style={{ textAlign: 'center', color: 'white', padding: 10 }}>Forgot Password?</Text>
      <View>
        <Pressable style={styles.button}>
          <Button
            title="Log in"
            onPress={() => Alert.alert("Logged In")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#031b38',

  },
  text: {
    alignSelf: 'center',
    fontFamily:'Lobster-Regular',
    fontSize: 50,
    color: "red",
    marginTop: 200,
    marginBottom: 40,
    
  },
  text1:{alignSelf: 'center',
  fontFamily:'Lobster-Regular',
  fontSize: 50,
  color: "wheat",
  marginTop: 200,
  marginBottom: 40,
  textTransform:"uppercase"
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    opacity: 0.2
  },
  box: {
    padding: 10
  },
  button: {
    width: 200,
    alignSelf: "center",
    padding: 10,




  }
});

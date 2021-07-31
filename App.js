import React, { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Touchable, Button, Pressable, Alert, TextInput, ImageBackground } from 'react-native'
export default function App() {
 const [email,setemail]=useState('');
 const [password,setpassword]=useState('');


 const handle_Email=(data)=>{
   console.log(data);
   setemail(data);
 }
 const handle_Password=(data)=>{
   console.log(data);
   setpassword(data);
 }

 const handle_Button=()=>{
   if (email!='' && password!='')
   {
     Alert.alert('Logged In');
   }
   else if (email=='' && password=='')
   {
    Alert.alert("Email and Password are Missing");
   }
   else if (password==''){
     Alert.alert("Password is Missing");
   }
   else {
    Alert.alert("Email is Missing");
   }
  
 }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} >React<Text style={styles.text1}>App</Text></Text>
      <View style={styles.box}>
        <TextInput style={styles.input} onChangeText={handle_Email} placeholder={"Enter Email"} placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.box}>
        <TextInput style={styles.input} onChangeText={handle_Password} placeholder={"Enter Password"} secureTextEntry={true} placeholderTextColor="black" ></TextInput>
      </View>
      <Pressable onPress={()=>{Alert.alert("Forgot Password")}}><Text style={{ textAlign: 'center', color: 'white', padding: 10 }}>Forgot Password?</Text></Pressable>
      <View>
        <Pressable style={styles.button}>
          <Button
            title="Log in"
            onPress={handle_Button}
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
    marginBottom: 40
    
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
    color: 'black',
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
    padding: 10




  }
});

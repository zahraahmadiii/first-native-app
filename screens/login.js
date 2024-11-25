import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit=()=>{
  console.log(username,password)
  }
  return (
    <View style={styles.loginContainer}>
        <View style={styles.ImageContainer}>
        <Image
          source={require('../assets/lock.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="نام کاربری"
              placeholderTextColor="#888"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
             <TextInput
              style={styles.input}
              placeholder="رمزعبور"
              placeholderTextColor="#888"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
             <TouchableOpacity style={styles.button}  onPress={handleSubmit}>
              <Text style={styles.buttonText}>ورود</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    paddingBottom: 30,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    textAlign: 'right',
  },
  button: {
    height: 50,
    backgroundColor: '#20055e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
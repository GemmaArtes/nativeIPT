import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Registration({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await       axios.post('http://192.168.43.37:8000/api/v1/accounts/users/', { username, email, password })
      alert('New User added successfully!');// replace with the code you want to execute after successful registration
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error); // replace with the code you want to execute if registration fails
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Inventory System</Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <View style={styles.box}>
        <Text> </Text>
        <Text style={styles.boxTitle}>Create an Account</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          keyboardType='default'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          textContentType='emailAddress'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder='Password'
          textContentType='password'
          value={password}
          onChangeText={setPassword}
        />
        <Text> </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.buttonRegister} onPress={handleRegistration}>
            <Text style={{ color: '#EDDBC7' }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A06D78',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    marginTop: 20,
    borderColor: '#EDDBC7',
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    padding: 5,
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: 36,
    color: '#EDDBC7',
  },
  boxTitle: {
    fontSize: 28,
    color: '#A06D78',
    alignSelf: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: '#EDDBC7',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  buttonRegister: {
    height: 50,
    width: 100,
    backgroundColor: '#A06D78',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

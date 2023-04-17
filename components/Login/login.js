import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
  if (username && password) {
    axios.post('http://192.168.43.37:8000/api/v1/accounts/token/login', { username, password })
        .then(response => {
          console.log(response);
          AsyncStorage.setItem("token", JSON.stringify(response.data.auth_token));
          navigation.navigate('Home');
          // dispatch(toggleLoggedIn())
          // do something with the response, like store the token in local storage
        })
        .catch(error => {
          console.log(error);
          setFeedback("Incorrect email or password.");
        });
    } else {
      setFeedback("Email and password are required.");
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
        <Text style={styles.boxTitle}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={username}
          onChangeText={handleUsernameChange}
        />

        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={handlePasswordChange}
        />
        <Text> </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
            <Text style={{ color: '#EDDBC7' }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.buttonSignup} onPress={() => { navigation.navigate("Registration"); }}>
            <Text style={{ color: '#EDDBC7' }}>Sign Up</Text>
          </TouchableOpacity>

        </View>
        <Text style={{ color: 'red' }}>{feedback}</Text>
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
        alignSelf: 'center'
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
        marginTop: 20
    },
    buttonLogin: {
        height: 50,
        width: 100,
        backgroundColor: '#A06D78',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonSignup: {
        height: 50,
        width: 100,
        backgroundColor: '#A06D78',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10

    },
});


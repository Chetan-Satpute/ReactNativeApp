import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function LoginForm() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/WhatsApp.png')} />

      <Text style={styles.description}>
        Simple, reliable, private messaging and calling for free*, available all
        over the world.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#AAAAAA"
          style={styles.inputBox}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} color="darkgreen" />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  logo: {
    height: 96,
    width: 150,
    alignSelf: 'center',
    marginVertical: 50,
  },
  description: {
    textAlign: 'center',
    color: '#555555',
    marginVertical: 20,
  },
  inputContainer: {
    justifyContent: 'space-around',
  },
  inputBox: {
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    marginVertical: 5,
    color: '#555555',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  forgotPasswordText: {
    color: 'darkgreen',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },
});

export default LoginForm;

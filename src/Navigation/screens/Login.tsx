import React, {useContext, useState} from 'react';
import {SafeAreaView, TextInput, View, Button, StyleSheet} from 'react-native';
import {LoginContext} from '..';

const Login = () => {
  const [_, setLoggedIn] = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email !== '' && password !== '') {
      setLoggedIn(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="grey"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="grey"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button title="Log In" color="grey" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    justifyContent: 'space-evenly',
    padding: '5%',
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: '4%',
    borderRadius: 10,
    color: '#000000',
  },
});

export default Login;

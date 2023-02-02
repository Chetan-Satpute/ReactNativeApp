import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';
import {LoginContext} from '..';

const Home = ({navigation}: any) => {
  const [_, setLoggedIn] = useContext(LoginContext);

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.heading}>Home</Text>
        <Button
          title="About"
          color="blue"
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <Button title="Log Out" color="red" onPress={handleLogOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default Home;

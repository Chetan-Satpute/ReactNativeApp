import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>About</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default About;

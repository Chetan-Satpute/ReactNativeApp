import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import LoginForm from './src/components/LoginForm';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

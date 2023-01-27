import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Profile from './components/Profile';
import Socials from './components/Socials';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Profile />
      <Socials />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';

import ProfileHeader from './ProfileHeader';

function Profile() {
  return (
    <View style={styles.container}>
      <ProfileHeader />

      <Text style={styles.description}>
        This is a description about the person in below picture. A bit longer
        description.
      </Text>

      <Image
        style={styles.profilePhoto}
        source={require('../assets/avatar.png')}
      />

      <Text style={styles.someText}>6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingTop: StatusBar.currentHeight,
  },
  description: {
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
  profilePhoto: {
    alignSelf: 'center',
    height: 75,
    width: 75,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'cyan',
  },
  someText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    paddingTop: 10,
  },
});

export default Profile;

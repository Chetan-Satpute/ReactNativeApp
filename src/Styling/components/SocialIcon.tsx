import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface Props {
  image: ImageSourcePropType;
  title: string;
}

function SocialIcon(props: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={props.image} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '4%',
  },
  icon: {
    height: 50,
    width: 50,
  },
  title: {
    color: 'black',
    marginTop: 10,
  },
});

export default SocialIcon;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import SocialIcon from './SocialIcon';

const icon = require('../assets/whatsapp.png');

const data = [
  {
    icon: icon,
    title: 'Phone',
  },
  {
    icon: icon,
    title: 'WhatsApp',
  },
  {
    icon: icon,
    title: 'Instagram',
  },
  {
    icon: icon,
    title: 'Gmail',
  },
  {
    icon: icon,
    title: 'Snap Chat',
  },
  {
    icon: icon,
    title: 'Youtube',
  },
  {
    icon: icon,
    title: 'Web',
  },
  {
    icon: icon,
    title: 'Twitter',
  },
  {
    icon: icon,
    title: 'Linkedin',
  },
];

function Socials() {
  return (
    <View style={styles.container}>
      {data.map(item => (
        <SocialIcon key={item.title} image={item.icon} title={item.title} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: '5%',
    alignContent: 'center',
  },
});

export default Socials;

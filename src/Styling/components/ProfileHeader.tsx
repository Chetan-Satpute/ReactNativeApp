import { Image, StyleSheet, Text, View } from 'react-native';

function ProfileHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Socials & Accounts</Text>
      <View style={styles.settingContainer}>
        <Image
          style={styles.settingIcon}
          source={require('../assets/setting.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  settingContainer: { backgroundColor: 'white', padding: 5, borderRadius: 100 },
  settingIcon: {
    height: 20,
    width: 20,
  },
});

export default ProfileHeader;

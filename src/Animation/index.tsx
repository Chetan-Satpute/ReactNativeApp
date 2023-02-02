import React, {useRef} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const App = () => {
  const width = Dimensions.get('window').width;

  const opacityAnimValue = useRef(new Animated.Value(0));
  const translateAnimValue = useRef(new Animated.Value(0));
  const scaleAnimValue = useRef(new Animated.Value(0));

  const showAnimation = () => {
    opacityAnimValue.current.setValue(0);
    translateAnimValue.current.setValue(0);
    scaleAnimValue.current.setValue(0);

    const fadeAnim = Animated.timing(opacityAnimValue.current, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });

    const translateAnim = Animated.timing(translateAnimValue.current, {
      toValue: width - 50,
      duration: 2000,
      useNativeDriver: true,
    });

    const scaleAnim = Animated.timing(scaleAnimValue.current, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });

    fadeAnim.start();
    translateAnim.start();
    scaleAnim.start();
  };

  const opacityValue = opacityAnimValue.current.interpolate({
    inputRange: [0, 0.4, 0.6, 1],
    outputRange: [0, 1, 1, 0],
  });

  const scaleValue = scaleAnimValue.current.interpolate({
    inputRange: [0, 0.4, 0.6, 1],
    outputRange: [0, 1, 1, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require('./assets/Star.png')}
        style={[
          styles.box,
          {
            opacity: opacityValue,
            transform: [
              {
                translateX: translateAnimValue.current,
              },
              {
                scale: scaleValue,
              },
            ],
          },
        ]}
      />
      <Button title="Show Animation" onPress={showAnimation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#2d2d2d',
  },
  box: {
    height: 50,
    width: 50,
  },
});

export default App;

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import MovieList from './src/components/MovieList';

const image = require('./src/assets/Movie.png');

const data = [
  {
    title: 'Fast and Furious Presents: Hobbs & Shaw',
    image: image,
    rating: 6.6,
  },
  {
    title: 'Once upon a time in Hollywood',
    image: image,
    rating: 9.4,
  },
  {
    title: 'Angle has Fallen',
    image: image,
    rating: 7.1,
  },
  {
    title: 'BoJack Horseman: Season 6',
    image: image,
    rating: 8.6,
  },
  {
    title: 'Official secrets',
    image: image,
    rating: 8.3,
  },
  {
    title: 'Catherine the Great',
    image: image,
    rating: 7.6,
  },
];

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>August</Text>
      <MovieList data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;

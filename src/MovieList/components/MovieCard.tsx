import React from 'react';
import {Image, StyleSheet, Text, View, ImageSourcePropType} from 'react-native';

interface Props {
  title: string;
  rating: number;
  image: ImageSourcePropType;
  color: string;
}

function MovieCard(props: Props) {
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.category}>Movie</Text>
          <View style={styles.ratingContainer}>
            <Image
              style={styles.starImage}
              source={require('../assets/Star.png')}
            />
            <Text>{props.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    width: 50,
    height: 74,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  category: {
    fontWeight: '300',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starImage: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});

export default MovieCard;

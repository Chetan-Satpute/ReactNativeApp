import React, {useRef} from 'react';
import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';

import MovieCard from './MovieCard';

const colors = ['lightgreen', 'skyblue', 'orange', 'pink'];

interface Props {
  data: {
    title: string;
    image: ImageSourcePropType;
    rating: number;
  }[];
}

function MovieList(props: Props) {
  const colorIndex = useRef(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => {
          colorIndex.current = (colorIndex.current + 1) % colors.length;

          return (
            <MovieCard
              title={item.title}
              image={item.image}
              rating={item.rating}
              color={colors[colorIndex.current]}
            />
          );
        }}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieList;

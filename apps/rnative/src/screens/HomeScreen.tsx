import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useQuery} from '../generated/hooks';

export function HomeScreen() {
  const [dragons, setDragons] = useState([]);
  const {response: dragonsResponse} = useQuery.Dragons({});

  useEffect(() => {
    console.log({dragonsResponse});
    if (dragonsResponse.status === 'ok') {
      let newDragons = dragonsResponse?.body?.data?.spacex_dragons ?? [];
      setDragons([...dragons, ...newDragons]);
    }
  }, [dragonsResponse]);

  return (
    <View style={styles.container}>
      <Text>Dragons List</Text>
      <FlatList
        data={dragons}
        extraData={[dragons]}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) => {
          return (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Text>{item.active}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {},
});

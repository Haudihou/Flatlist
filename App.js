import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import {DATA} from './Data';
import Row from './Row';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
      <FlatList
      data={DATA}
      renderItem= {({item}) => (
        <Row person={item} />
      )}
    />
  </View>
</SafeAreaView>
);
}

/*
function renderItem({item}) {
  return (<Text>{item.lastname}</Text>);
}
*/

/*
const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
);
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

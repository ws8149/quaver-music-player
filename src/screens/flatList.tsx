import React from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';

let sentences = [
 "Lorem Ipsum Dolor",
 "Lorem Ipsum Dolor",
 "Lorem Ipsum Dolor",
 "Lorem Ipsum Dolor",
 "Lorem Ipsum Dolor",
 "Lorem Ipsum Dolor",
]
const DATA = (new Array(10).fill("1")).map((item, index) => ({
 id: index,
 title: sentences[index],
}))

const Item = ({ title }) => (
 <View style={styles.item}>
  <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{title}</Text>
 </View>
);
export default (props) => {
 const renderItem = ({ item }) => <Item title={item.title} />
 return (
  <FlatList
   data={DATA}
   renderItem={renderItem}
   keyExtractor={item => item.id}
   horizontal
  />
 );
}
var styles = StyleSheet.create({
 item: {
  padding: 8,
 }
});
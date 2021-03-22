import React from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';

let sentences = [
 "Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?",
 "Improve your goldfish's physical fitness by getting him a bicycle.",
 "He was an introvert that extroverts seemed to love.",
 "She couldn't decide of the glass was half empty or half full so she drank it.",
 "It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.",
 "The small white buoys marked the location of hundreds of crab pots.",
 "Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.",
 "He swore he just saw his sushi move.", " She always speaks to him in a loud voice.",
 "She moved forward only because she trusted that the ending she now was going through must be followed by a new beginning."
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
  />
 );
}
var styles = StyleSheet.create({
 item: {
  padding: 8,
 }
});
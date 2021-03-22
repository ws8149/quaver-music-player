import React from 'react';
import {
 SafeAreaView, View, StyleSheet, ImageBackground
} from 'react-native';
// import MaskedView from './maskedView';
import MaskedElement from './maskElement';
import FlatList from './flatList';
import MaskedView from '@react-native-masked-view/masked-view';

export const ArtistsScreen = () => (
 <SafeAreaView style={{flex: 1}}>   
    <View style={{ height: 300, backgroundColor: 'black' }}>
     <MaskedView maskElement={<MaskedElement />}>
      <FlatList />      
     </MaskedView>
    </View>   
  </SafeAreaView>
);
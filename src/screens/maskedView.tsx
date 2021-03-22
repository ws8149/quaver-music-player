import React from 'react';
import { StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

export default ({element, children}) => <MaskedView   
 maskElement={element}
 
>
 {children}
</MaskedView>

var styles = StyleSheet.create({
 container: {
  flex: 1, 
  flexDirection: 'row', 
  height: '100%'
 }
});
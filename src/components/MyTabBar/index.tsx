import MaskedView from '@react-native-masked-view/masked-view';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import MaskElement from '../../screens/maskElement';

export const MyTabBar = (props) => {
  return (
    <MaskedView maskElement={
      <LinearGradient
        colors={['#FFFFFF00', '#FFFFFF', '#FFFFFF00']}
        style={{ flex: 1 }}
      />}>
      <MaterialTopTabBar
        {...props}
        style={{ backgroundColor: 'black' }}
      />
    </MaskedView>

  );
}


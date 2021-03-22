import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppText } from './src/components/AppText';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText>Home!</AppText>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText>Settings!</AppText>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
        activeTintColor: 'white',
        labelStyle: {
          fontSize: 16,
          fontFamily: 'Inter_900Black',          
        },                        
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}
      sceneContainerStyle={{
        backgroundColor: 'black'
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />      
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


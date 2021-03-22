import * as React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as MediaLibrary from 'expo-media-library';
import { MediaType } from 'expo-media-library';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { AppText } from './src/components/AppText';

import { ArtistsScreen } from './src/screens/ArtistsScreen'
import MaskedView from '@react-native-masked-view/masked-view';
import MaskedElement from './src/screens/maskElement';
import { MyTabBar } from './src/components/MyTabBar';


function AlbumsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Albums!</Text>
    </View>
  );
}

function GenresScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Genres!</Text>
    </View>
  );
}

function PlaylistsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Playlists!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {

  const [musicFiles, setMusicFiles] = React.useState<Array<MediaLibrary.Asset>>();
  const [sound, setSound] = React.useState<Audio.Sound>(new Audio.Sound());

  /** Load music files */
  React.useEffect(() => {
    const getMusicFiles = async () => {
      const permission = await MediaLibrary.getPermissionsAsync()

      if (permission.granted) {
        const mediaLibrary = await MediaLibrary.getAssetsAsync({
          mediaType: MediaType.audio
        })

        setMusicFiles(mediaLibrary.assets)
      } else {
        await MediaLibrary.requestPermissionsAsync()
      }

    }

    getMusicFiles()
  }, [])

  const TracksScreen = () => {
    const shuffle = async () => {
      console.log(musicFiles[0].uri)

      await sound.loadAsync({
        uri: musicFiles[0].uri
      });

      setSound(sound);

      await sound.playAsync()


    }

    const pause = async () => {
      sound?.pauseAsync()
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Shuffle" onPress={shuffle} />
        <Button title="pause" onPress={pause} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator           
          tabBarOptions={tabBarOptions}          
        >
          <Tab.Screen name="Tracks" component={TracksScreen} />
          <Tab.Screen name="Artists" component={ArtistsScreen} />
          <Tab.Screen name="Albums" component={AlbumsScreen} />
          <Tab.Screen name="Genres" component={GenresScreen} />
          <Tab.Screen name="Playlists" component={PlaylistsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}




const tabBarOptions = {
  scrollEnabled: true,
  activeTintColor: 'white',
  indicatorStyle: { backgroundColor: 'black' },
  tabStyle: {
    width: 100,
  },
  style: {
    backgroundColor: 'black',
  }
}

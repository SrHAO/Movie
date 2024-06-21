import React, {useMemo, useState} from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { PaperProvider, Button, DefaultTheme as DefaultThemePaper,MD2DarkTheme} from 'react-native-paper';
import { NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';

export default function App() {

  const [theme, setTheme] = useState('dark')
  //const [theme1, setTheme1] = useState('light')

  DefaultThemePaper.colors.primary= '#3c3c3c';
  MD2DarkTheme.colors.primary = '#c3c3c3';
  MD2DarkTheme.colors.accent ='#3c3c3c';
  
  DarkTheme.colors.card = '#1f1f1f'; 
  DarkTheme.colors.background='#191919';

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  )

  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme === 'dark' ? MD2DarkTheme : DefaultThemePaper}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'darkcontent'}/>
        <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigation/>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  )
}
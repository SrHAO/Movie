import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Seach from '../screens/Seach';
import { Button } from 'react-native-paper';

const Stank = createNativeStackNavigator();




export default function StackNavigation() {
    return (
        <Stank.Navigator>
            <Stank.Screen name='home' component={Home} options={{title:' '}}/>
            <Stank.Screen name='movie' component={Movie} options={{title:''}}/>
            <Stank.Screen name='news' component={News} options={{title:'Nuevas Peliculas'}}/>
            <Stank.Screen name='popular' component={Popular} options={{title:'Peliculas Populares'}}/>
            <Stank.Screen name='seach' component={Seach} options={{title:''}}/>
        </Stank.Navigator>
    )
}


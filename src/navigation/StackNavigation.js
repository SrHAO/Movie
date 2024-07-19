import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {IconButton} from 'react-native-paper'; 
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';


const Stank = createNativeStackNavigator();

export default function StackNavigation(props) {//inicio
    
    const {navigation} = props;

    //menu button
    const buttonleft = (screen) => {

        switch(screen){
            case 'search':
            case 'movie':
                return(
                    <IconButton icon='arrow-left' onPress={() => navigation.goBack()}/>
                );

            default:  
                return(
            <IconButton icon='menu' onPress={() => navigation.openDrawer()}/>
        );            
        }
    }

    //magnify button
    const buttonRight = () => {
        return(
            <IconButton icon = 'magnify' onPress={() => navigation.navigate('seach')}/>
            )
        }

    return (
        <Stank.Navigator>
            <Stank.Screen name='home' component={Home} 
            options={{title:' ', headerLeft: () => buttonleft('home'), headerRight: () => buttonRight()}}/>
            
            <Stank.Screen name='movie' component={Movie} 
            options={{title:'',  headerLeft: () => buttonleft('movie'), headerRight: () => buttonRight()}}/>
            
            <Stank.Screen name='news' component={News} 
            options={{title:'Nuevas Peliculas',  headerLeft: () => buttonleft('news'), headerRight: () => buttonRight()}}/>
            
            <Stank.Screen name='popular' component={Popular} 
            options={{title:'Peliculas Populares', headerLeft: () => buttonleft('popular'), headerRight: () => buttonRight()}}/>
            
            <Stank.Screen name='seach' component={Search} 
            options={{title:'', headerLeft: () => buttonleft('search')}}/>
        </Stank.Navigator>
    )
} //Final


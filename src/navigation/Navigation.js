import React, {useState} from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerContent from './DrawerContent';
import { IconButton, PaperProvider,MD2DarkTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


const buttonRight = () => {
    return(
        <IconButton icon = 'magnify' onPress={() => Navigation.openDrawer()}/>
        )
    }



export default function Navigation() {
    return (
            <Drawer.Navigator initialRouteName='app'  drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name='The Movie app' component={StackNavigation} 
                options={{ headerRight: () => buttonRight()}}/>
            </Drawer.Navigator>    
    )
}

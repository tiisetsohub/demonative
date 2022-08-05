import React, { useState, useEffect } from 'react'; 
import AppNavigation from '../AppNavigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

export default function AppState(){
    const [allNotes, setAllNotes]  = useState([{noteID : 1, noteTitle : 'First idea', noteText : 'This is my first idea'},{noteID : 2, noteTitle : 'Second idea', noteText : 'This is my second idea '}]);
    const [note, setNote] = useState({});

    const AppState = {
        allNotes, setAllNotes,
        note, setNote,
    };

    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <AppNavigation AppState={AppState}/>
    }
}
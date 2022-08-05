import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

import Header from '../../Components/Headers/Header';
import Footer from '../../Components/Footers/Footer';

export default function Home({navigation, AppState }){
    const { allNotes, setNote } = AppState;

    const handlePress = (e) => {
        setNote(e);
        navigation.navigate('Note')
    }

    return (
        <View style={styles.screen}>
            <Header AppState={AppState} navigation={navigation} heading='My Notes'/>
            <View style={styles.body}>
                {allNotes.map((e, i) =>{
                    return (
                        <Pressable key={i} onPress={() => handlePress(e)} style={styles.button}>
                            <Text>{e.noteTitle}</Text>
                        </Pressable>
                    );
                })}
            </View>
            <Footer AppState = {AppState} navigation = {navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop : Constants.statusBarHeight,
        backgroundColor : 'white',
        
    },
    body : {
        flex: 8,
        width : '100%',
        paddingTop: 20
    },

    button : {
        margin : 15,
        marginTop : 0,
        padding : 20,
        borderWidth : 1,
        borderRadius : 6,
        
    }
});
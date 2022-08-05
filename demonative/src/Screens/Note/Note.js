import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

import Header from '../../Components/Headers/Header';
import Footer from '../../Components/Footers/Footer';

export default function Note({ navigation, AppState }) {
    const { note } = AppState;

    return (
        <View style={styles.screen}>
            <Header AppState = {AppState} navigation = {navigation} heading = {note.noteTitle}/>
            <View style={styles.body}>
                <Text>{note.noteText }</Text>
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
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },
    body: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
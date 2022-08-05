import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Footer({ navigation }) {

    return (
        <View style={styles.Footercont}>
            <Pressable onPress={() => navigation.navigate('AllNotes')}>
                <Icon name="home" size={25} color="black" />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('CreateNote')}>
                <Icon name="pluscircleo" size={25} color="black" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    Footercont: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        borderTopWidth : 0.5,
        
    }
});
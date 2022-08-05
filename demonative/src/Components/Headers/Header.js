import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';


export default function Header({ navigation, heading }) {

    return (
        <View style={styles.Headercont}>
            <Pressable onPress={() => navigation.navigate('AllNotes')}>
                <Image style={styles.logo} source={require('../../Assets/Images/logo.png')} />
            </Pressable>
            <Text style={styles.text}>{heading}</Text>
            <Icon name="user" size={25} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    Headercont: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth : 0.5
    },

    logo: {
        height: 30,
        width: 30
    },
    text: {
        fontFamily: 'Inter_700Bold'
    }
});
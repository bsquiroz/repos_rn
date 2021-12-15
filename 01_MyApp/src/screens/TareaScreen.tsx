import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F2C67',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    box1: {
        backgroundColor: '#AE4CCF',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
    },
    box2: {
        backgroundColor: '#FF6D6D',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        top: 50,
    },
    box3: {
        backgroundColor: '#C85C5C',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
    },
});

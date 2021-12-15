import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
    handleSetValue: Function;
    title: string;
    bandera?: string;
    banderaStyle?: string;
}

export const FloatBotton = ({
    handleSetValue,
    title,
    bandera,
    banderaStyle,
}: Props) => {
    const stylePositionButton =
        banderaStyle === 'R' ? sytles.buttonLocationR : sytles.buttonLocationL;
    return (
        <TouchableOpacity
            onPress={() => handleSetValue(bandera)}
            style={stylePositionButton}>
            <View style={sytles.styleButton}>
                <Text style={sytles.styleButtonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const sytles = StyleSheet.create({
    buttonLocationR: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    buttonLocationL: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    styleButton: {
        backgroundColor: '#7267CB',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
    styleButtonText: {
        color: '#fff',
        fontSize: 25,
    },
});

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FloatBotton} from '../components/FloatBotton';

export const ContadorScreen = () => {
    const [value, setValue] = useState(0);

    const handleSetValue = (bandera: string) => {
        bandera === 'suma' ? setValue(value + 1) : setValue(value - 1);
    };

    return (
        <View style={sytles.layoutContador}>
            <Text style={sytles.styleLabel}>{value}</Text>
            <FloatBotton
                handleSetValue={handleSetValue}
                title={'+1'}
                bandera={'suma'}
                banderaStyle="R"
            />
            <FloatBotton handleSetValue={handleSetValue} title={'-1'} />
        </View>
    );
};

const sytles = StyleSheet.create({
    layoutContador: {
        flex: 1,
        justifyContent: 'center',
    },
    styleLabel: {
        textAlign: 'center',
        fontSize: 40,
        color: '#000',
    },
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
    },
    styleButtonText: {
        color: '#fff',
        fontSize: 25,
    },
});

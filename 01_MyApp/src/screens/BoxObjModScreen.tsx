import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const BoxObjModScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.cajaPrueba}>
                    <Text style={styles.title}>Caja 1</Text>
                    <Text style={styles.titlePrueba}>HolaQueHace</Text>
                </View>
            </View>
            <View style={styles.box2}>
                <Text style={styles.title}>Caja 2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.title}>Caja 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E4C6D',
    },
    box2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B85252',
    },
    box3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#753188',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    cajaPrueba: {
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'baseline',
        padding: 4,
    },
    titlePrueba: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
    },
});

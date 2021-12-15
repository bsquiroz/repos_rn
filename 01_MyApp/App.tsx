import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjModScreen} from './src/screens/BoxObjModScreen';
import {ContadorScreen} from './src/screens/ContadorScreen';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {TareaScreen} from './src/screens/TareaScreen';

export const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {/* <HolaMundoScreen /> */}
            {/* <ContadorScreen /> */}
            {/* <BoxObjModScreen /> */}
            <TareaScreen />
        </SafeAreaView>
    );
};

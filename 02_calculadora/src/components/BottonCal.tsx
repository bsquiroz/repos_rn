import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
    texto: string;
    bg?: string;
    color?: string;
    w?: number;
    accion: (numeroTexto: string) => void;
}

export const BottonCal = ({
    texto,
    bg = '#2D2D2D',
    color = '#FFF',
    w = 80,
    accion,
}: Props) => {
    return (
        <TouchableOpacity onPress={() => accion(texto)}>
            <View style={{...styles.boton, backgroundColor: bg, width: w}}>
                <Text style={{...styles.textBoton, color: color}}>{texto}</Text>
            </View>
        </TouchableOpacity>
    );
};

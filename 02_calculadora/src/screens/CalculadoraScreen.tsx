import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {BottonCal} from '../components/BottonCal';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
    const {
        armarNumero,
        botonDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        limpiar,
        positivoNegativo,
        numero,
        numeroAnt,
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {numeroAnt !== '0' && (
                <Text style={styles.resultadoPequeno}>{numeroAnt}</Text>
            )}

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>
                {numero}
            </Text>

            <View style={styles.fila}>
                <BottonCal
                    texto="C"
                    bg="#9B9B9B"
                    color="#2D2D2D"
                    accion={limpiar}
                />
                <BottonCal
                    texto="+/-"
                    bg="#9B9B9B"
                    color="#2D2D2D"
                    accion={positivoNegativo}
                />
                <BottonCal
                    texto="del"
                    bg="#9B9B9B"
                    color="#2D2D2D"
                    accion={botonDel}
                />
                <BottonCal texto="/" bg="#FF9427" accion={btnDividir} />
            </View>

            <View style={styles.fila}>
                <BottonCal texto="7" color="#fff" accion={armarNumero} />
                <BottonCal texto="8" color="#fff" accion={armarNumero} />
                <BottonCal texto="9" color="#fff" accion={armarNumero} />
                <BottonCal texto="x" bg="#FF9427" accion={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
                <BottonCal texto="4" color="#fff" accion={armarNumero} />
                <BottonCal texto="5" color="#fff" accion={armarNumero} />
                <BottonCal texto="6" color="#fff" accion={armarNumero} />
                <BottonCal texto="-" bg="#FF9427" accion={btnRestar} />
            </View>

            <View style={styles.fila}>
                <BottonCal texto="1" color="#fff" accion={armarNumero} />
                <BottonCal texto="2" color="#fff" accion={armarNumero} />
                <BottonCal texto="3" color="#fff" accion={armarNumero} />
                <BottonCal texto="+" bg="#FF9427" accion={btnSumar} />
            </View>

            <View style={styles.fila}>
                <BottonCal
                    texto="0"
                    color="#fff"
                    w={180}
                    accion={armarNumero}
                />
                <BottonCal texto="." color="#fff" accion={armarNumero} />
                <BottonCal texto="=" bg="#FF9427" accion={calcular} />
            </View>
        </View>
    );
};

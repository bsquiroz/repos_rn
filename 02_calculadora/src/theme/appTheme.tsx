import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end',
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    textBoton: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

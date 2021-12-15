import React, {useRef, useState} from 'react';

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
}

export const useCalculadora = () => {
    const [numeroAnt, setNumeroAnt] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnt('0');
    };

    const armarNumero = (numeroTexto: string) => {
        //No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('-0') || numero.startsWith('0')) {
            //punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                //evaluar si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                //Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                //evitar el 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    };

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    };

    const botonDel = () => {
        const auxNumero = numero;
        const lengthNumero = auxNumero.length;

        if (numero.includes('-')) {
            if (auxNumero.length !== 2) {
                setNumero(numero.slice(0, lengthNumero - 1));
            } else {
                setNumero('0');
            }
        } else {
            if (auxNumero.length !== 1) {
                setNumero(numero.slice(0, lengthNumero - 1));
            } else {
                setNumero('0');
            }
        }
    };

    const cambiarNumeroPorAnterior = () => {
        setNumeroAnt(numero);
        setNumero('0');
    };

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    };

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnt);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;

            default:
                break;
        }

        setNumeroAnt('0');
    };

    return {
        limpiar,
        armarNumero,
        positivoNegativo,
        botonDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        numeroAnt,
        numero,
    };
};

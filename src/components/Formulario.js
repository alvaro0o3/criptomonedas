import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'GBP', nombre: 'Libra' }
    ];

    // state del listado de criptomonedas
    const [criptomonedas, setCriptomonedas] = useState([]);

    const [error, setError] = useState(false);

    // Usar custom hook useMoneda
    const [moneda, SelectMonedas] = useMoneda('Selecciona la divisa', '', MONEDAS);

    // Usar custom hook useCriptomoneda
    const [cripto, SelectCriptos] = useCriptomoneda('Selecciona la criptomoneda', '', criptomonedas);

    // Llamada a la API
    useEffect(() => {

        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

        // Con fetch
        // const consultarAPI = async () => {
        //     const respuesta = await fetch(url);
        //     const resultado = await respuesta.json();
        //     console.log(resultado);
        // }

        // Con Axios
        const consultarAPI = async () => {
            const resultado = await axios.get(url);
            setCriptomonedas(resultado.data.Data);
        }

        consultarAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (moneda.trim() === '' || cripto.trim() === '') {
            setError(true);
            return;
        }

        // Pasar al componente principal
        setError(false);
        setMoneda(moneda);
        setCriptomoneda(cripto);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {
                error
                ? <Error 
                    mensaje="Por favor seleccione una moneda y una criptomoneda"
                />
                : null
            }

            <SelectCriptos />

            <SelectMonedas />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Formulario;
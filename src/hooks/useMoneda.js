import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border:none;
    outline: none;
    font-size: 1.2rem;

    &:hover {
        
    }
`;

const useMoneda = (label, monedaInicial, monedas) => {

    const [moneda, setMoneda] = useState(monedaInicial);

    const SelectMonedas = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => setMoneda(e.target.value) }
                value={moneda}
            >
                <option value=""> -- Selecciona divisa -- </option>
                {monedas.map(item => (
                    <option value={item.codigo} key={item.codigo}>{item.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )
        
    

    return [moneda, SelectMonedas];
}

export default useMoneda;
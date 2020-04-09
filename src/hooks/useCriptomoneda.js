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

const useCriptomoneda = (label, criptoInicial, criptos) => {

    const [cripto, setCripto] = useState(criptoInicial);

    const SelectCriptos = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => setCripto(e.target.value) }
                value={cripto}
            >
                <option value=""> -- Selecciona criptomoneda -- </option>
                {criptos.map(item => (
                    <option value={item.CoinInfo.Name} key={item.CoinInfo.Id}>{item.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )
        
    

    return [cripto, SelectCriptos];
}

export default useCriptomoneda;
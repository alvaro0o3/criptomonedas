import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    border-radius: 4px;
`;

const Error = ({mensaje}) => ( 
    <Mensaje>
        {mensaje}
    </Mensaje>
 );

 
export default Error;
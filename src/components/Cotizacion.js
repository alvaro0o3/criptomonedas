import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    color: #fff;
    font-family: 'Bebas Neue', cursive;
    text-align: center;
`;

const Info = styled.p`
    font-size: 20px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 35px;

    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado, criptomoneda}) => {

    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado)

    return ( 
        <Container>
            <Precio>El precio del {criptomoneda} es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24h: <span>{resultado.CHANGEPCT24HOUR}%</span></Info>
        </Container>
     );
}
 
export default Cotizacion;
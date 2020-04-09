import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imagen from './criptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
import axios from 'axios';

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const ContainerLoading = styled.div`
    text-align: center;
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const obtenerCotizacion = async () => {
      //Evitamos la ejecución la primera vez
      if (moneda === '') return;

      //Llamada a la API para la cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      //mostrar el spinner
      setLoading(true);

      setTimeout(() =>{
        setLoading(false);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000)

      
    }

    obtenerCotizacion();

  }, [moneda, criptomoneda]);

  return (
    <Container>
      <ContainerLoading>
        <Imagen
          src={imagen}
          alt="Criptomonedas"
        />
        {
          loading
          ? <Spinner />
          : <Cotizacion 
              resultado={resultado}
              criptomoneda={criptomoneda}
            />
        }
        
      </ContainerLoading>
      <div>
        <Heading>Convierte criptomonedas al momento</Heading>

        <Formulario
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
        />

        
      </div>
    </Container>
  );
}

export default App;

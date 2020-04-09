import React, { Fragment, useState } from 'react';

const useMoneda = (label, monedaInicial, monedas) => {

    const [moneda, setMoneda] = useState(monedaInicial);

    const SelectMonedas = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange={ e => setMoneda(e.target.value) }
                value={moneda}
            >
                <option value=""> -- Selecciona divisa -- </option>
                {monedas.map(item => (
                    <option value={item.codigo} key={item.codigo}>{item.nombre}</option>
                ))}
            </select>
        </Fragment>
    )
        
    

    return [moneda, SelectMonedas];
}

export default useMoneda;
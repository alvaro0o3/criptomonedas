import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    const [moneda, setMoneda] = useState('');

    const SelectMonedas = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    )
        
    

    return [moneda, setMoneda, SelectMonedas];
}

export default useMoneda;
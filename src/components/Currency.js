import React, { useContext, useState, setState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch,currency  } = useContext(AppContext);
    //const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (e) => {
        setNewCurrency(e.target.value);
        //setState({currency: e.target.value});
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }
    return (
        <div>
            <label htmlFor="inputGroupSelect02">currency</label>
            <select className="alert alert-success" id="inputGroupSelect02" onChange={handleCurrencyChange}>
                <option defaultValue>Choose...</option>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
            selectedvalue:{newCurrency}
        </div>
    );
};
export default Currency;

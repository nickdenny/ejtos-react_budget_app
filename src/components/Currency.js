import React, { useContext, useState, setState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (option) => {
        alert(option);
        setNewCurrency(option.value);
        setState({currency});
    }
    return (
        <div>
            <label htmlFor="inputGroupSelect02">currency</label>
            <select value={currency} className="alert alert-success" id="inputGroupSelect02" onChange={handleCurrencyChange}>
                <option defaultValue>Choose...</option>
                <option value="Dollar" name="dollar"> $ Dollar</option>
                <option value="Pound" name="pound">£ Pound</option>
                <option value="Euro" name="euro">€ Euro</option>
                <option value="Ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;

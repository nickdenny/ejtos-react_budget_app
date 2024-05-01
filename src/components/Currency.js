import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    
    return (
        <div>
            <label htmlFor="inputGroupSelect02">currency</label>
            <select  className="alert alert-success" id="inputGroupSelect02">
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

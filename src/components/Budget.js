    import React, { useContext, useState } from 'react';
    import { AppContext } from '../context/AppContext';
    const Budget = () => {
        const { budget } = useContext(AppContext);
        const { expenses } = useContext(AppContext);
        const [newBudget, setNewBudget] = useState(budget);
        const handleBudgetChange = (event) => {
            if (event.target.value < expenses) {
                alert("You cannot reduce the budget value lower than the spending")
            }
            setNewBudget(event.target.value);
        }
        return (
    <div className='alert alert-secondary'>
    <span>Budget: £{budget}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
        );
    };
    export default Budget;

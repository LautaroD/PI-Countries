import React, { useState } from 'react';
import { connect } from 'react-redux';

const CreateActivity = () => {
    const [state, setState] = useState({
        name: '',
        price: 0,
        description: '',
        stock: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nameActividad'>Name:
                    <input
                        type="text"
                        name="nameActividad"
                        id="nameActividad"
                        value={state.name}
                        onChange={(e) => setState({ ...state, name: e.target.value })}
                    /></label>
            </form>
        </div>
    )
}

export default connect(null, null)(CreateActivity);
import { useState } from "react";

export default function Inputs({ label, name, onInputChange }) {
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    function handleInputChange(e) {
        if (e.target.value < 1) {
            setShowErrorMessage(true)
        }else{
            setShowErrorMessage(false)
        }
        onInputChange(e, name);
    }
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input onChange={(e) => handleInputChange(e)} id={name} type="number" />
            {showErrorMessage && <small>Value must be greater than 0</small>}
        </div>
    );
}
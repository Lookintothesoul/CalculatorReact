import ActionButtons from "./ActionButtons";
import NumButtons from "./NumButtons";
import './Calculator.css'
import React, {useState} from "react";

function Calculator() {
    let [value, setValue] = useState(0)

    const onChangeInput = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return (
        <div className="calculator">
            <header className="calculator-header">
                <input type="text" value={value} onChange={onChangeInput} id="calculatorInput"/>
            </header>
            <div className="calculator-body">
                <div className="calculator-numbers">
                    <NumButtons setValue={setValue}/>
                </div>
                <div className="calculator-action">
                    <ActionButtons setValue={setValue}/>
                </div>
            </div>
            <footer className="calculator-footer"></footer>
        </div>
    );
}

export default Calculator;
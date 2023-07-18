import React, {useState} from 'react';
import CalcButton from "../UI/Buttons/CalcButton";

const NumButtons = (props) => {
    let [buttons, setButtons] = useState([
        {text: '7'},
        {text: '8'},
        {text: '9'},
        {text: '4'},
        {text: '5'},
        {text: '6'},
        {text: '1'},
        {text: '2'},
        {text: '3'},
        {text: '0'},
        {text: ','},
    ])

    const addNumber = (e) => {
        let value = document.getElementById('calculatorInput').value
        let actBtn = document.querySelector('.calculator-action button.active')
        let val = e.target.innerText

        if (actBtn) {
            if (actBtn.classList.contains('hasFirst')) {
                if (val !== ',') {
                    props.setValue(val)
                }
                actBtn.classList.remove('hasFirst')
            } else {
                props.setValue(value + val)
            }
        } else {
            props.setValue(
                value !== '0'
                    ? value + val
                    : val !== ','
                        ? val
                        : 0 + val
            )
        }
    }

    return (
        <div>
            {buttons.map((btn, index) =>
                <CalcButton key={index} button={btn} onClick={addNumber}/>
            )}
        </div>
    );
};

export default NumButtons;
import React, {useState} from 'react';
import CalcButton from "../UI/Buttons/CalcButton";

let lastNumber = 0
const ActionButtons = (props) => {
    let [buttons, setButtons] = useState([
        {text: 'C', action: 'clear'},
        {text: '=', action: 'getValue'},
        {text: '+', action: 'increment'},
        {text: '-', action: 'decrement'},
        {text: '*', action: 'multiply'},
        {text: '/', action: 'divide'},
    ])
    let [value, setValue] = useState(props.value)
    let changeValue = (event) => {
        let btn = event.target
        let mode = btn.dataset.action
        let inputEl = document.getElementById('calculatorInput')

        if (mode !== 'clear' && mode !== 'getValue') {
            lastNumber = Number(inputEl.value.replace(',', '.'))

            if (lastNumber !== 0) {
                document.querySelector('.calculator-action button.active')?.classList.remove('active')
                btn.classList.toggle('active')
                btn.classList.add('hasFirst')
            }
        }

        switch (mode) {
            case "clear":
                props.setValue('0')
                document.querySelector('.calculator-action button.active')?.classList.remove('active')
                lastNumber = 0
                break;
            case "getValue":
                let actionEl = document.querySelector('.calculator-action button.active')

                if (actionEl) {
                    let value = Number(inputEl.value.replace(',', '.'))

                    switch (actionEl.dataset.action) {
                        case 'multiply':
                            props.setValue(lastNumber * value)
                            break;
                        case 'divide':
                            props.setValue(lastNumber / value)
                            break;
                        case 'increment':
                            props.setValue(lastNumber + value)
                            break;
                        case 'decrement':
                            props.setValue(lastNumber - value)
                            break;
                    }

                    document.querySelector('.calculator-action button.active')?.classList.remove('active')
                    lastNumber = 0
                }
                break;
        }
    }

    return (
        <div>
            {buttons.map((btn, index) =>
                <CalcButton key={index} button={btn} onClick={changeValue}/>
            )}
        </div>
    );
};

export default ActionButtons;
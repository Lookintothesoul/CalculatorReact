import classes from './ActionBtn.module.css'

function CalcButton(props) {
    return (
        <button
            className={classes.customButton}
            data-action={props.button.action}
            onClick={props.onClick}
        >
            {props.button.text}
        </button>
    )
}

export default CalcButton
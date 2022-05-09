import React from 'react'
import styles from './InputField.module.css'

type inputProps = {
    setvalue: React.Dispatch<React.SetStateAction<string>>
}

function InputField({ setvalue }: inputProps) {
    return (
        <div>
            <p>InputField</p>
            <input onChange={(event) => {
                setvalue(event.target.value)
            }} className={styles.textInput}></input>
        </div>
    )
}

export default InputField

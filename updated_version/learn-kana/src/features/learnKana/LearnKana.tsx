import React, { useState, useEffect } from 'react'
import InfoSection from '../infoSection/InfoSection'
import InputField from '../inputField/InputField'
import styles from './LearnKana.module.css'


function LearnKana() {
    const [answers, setAnswers] = useState({ right: 0, wrong: 0 })
    setTimeout(() => {
        setAnswers({ right: 1, wrong: 2 })
    }, 2000)

    const [inputValue, setInputValue] = useState('dsff')

    useEffect(() => {
        console.log('was called')

        return
    }, [])


    return (
        <div className={styles.border}>
            <InfoSection answers={answers} ></InfoSection>
            <InputField setvalue={setInputValue}></InputField>
            <div>{inputValue}</div>
        </div>
    )
}

export default LearnKana
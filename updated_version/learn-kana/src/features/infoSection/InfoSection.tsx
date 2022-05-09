import React from 'react'
import styles from './InfoSection.module.css'

function InfoSection({ answers = { right: 0, wrong: 0 } }) {
    return (
        <div className={styles.border} >
            <span>{answers.right} / {answers.wrong + answers.right}</span>
        </div>
    )
}

export default InfoSection
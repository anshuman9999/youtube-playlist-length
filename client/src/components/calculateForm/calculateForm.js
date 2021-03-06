import React from 'react'
import styles from './style.module.css'

function CalculateForm(props) {
    const [inputTerm, setInputTerm] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.calculateFormSubmit(inputTerm)
    }

    return(
        <form className="col s12" onSubmit={(e) => handleSubmit(e)} >
            <div className="row" >
                <div className={`input-field col s8 ${styles.inputColor}`} >
                    <input type="text" id="calculate-id" onChange={(e) => setInputTerm(e.target.value)} ></input>
                    <label htmlFor="calculate-id" >Playlist link or id</label>
                </div>
            </div>
            <button type="submit" className="btn red waves-effect waves-light
            " disabled={!inputTerm} >Calculate</button>
        </form>
    )
}

export default CalculateForm
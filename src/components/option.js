import React from 'react'

const Option=(props)=>(
    <div className="option">
        <p className="option__text">{props.count}.{props.optionTxt}</p>
       
       <button className="button button--link" onClick={(e)=>{props.handleDeleteOption(props.optionTxt)}}> remove </button>
    
    </div>
)

export default Option
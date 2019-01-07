import React from 'react'
import Option from './option'

const Options=(props)=>(
    <div>
    <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
    <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button>
    </div>
    
    {props.options.length ===0 && <p className="widget__message">Makku please enter an option</p>}

        {props.options.map((option,index)=>{
            return( 
                <Option  key={option} count={index +1 } optionTxt={option}
                handleDeleteOption={props.handleDeleteOption}
                />   
        )
        })}
    </div>
)


export default Options
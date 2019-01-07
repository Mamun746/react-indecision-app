import React from 'react'
import Option from './option'

const Options=(props)=>{
        return(
            <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {props.options.length ===0 && <p>Plz enter an item</p>}
        
                {props.options.map((option)=>{
                    return( 
                        <Option key={option} optionTxt={option}
                        handleDeleteOption={props.handleDeleteOption}
                        
                        />
                        
                )
                })}
            
            
            </div>
        )
    }


export default Options
import React from 'react'

const Option=(props)=>{
    
        return(
            <div>
               {props.optionTxt}
               <button onClick={(e)=>{props.handleDeleteOption(props.optionTxt)}}> remove item </button>
            
            </div>
        )
    
}

export default Option
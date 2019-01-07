import React from 'react'

const Header=(props)=>{
    
        return(
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            
            </div>
        )
    }

Header.defaultProps={
    title:"Indecision",
    subtitle:"Put your life in the hands of computer"

}
export default Header
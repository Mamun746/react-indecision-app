import React from 'react';
import ReactDOM from 'react-dom';

const app={
    title:"Indecision App",
    subTitle:"Put on your life on computer",
    options:[],
    show:"Please show me"
  }

  const onSubmitHandle=(e)=>{
      e.preventDefault()
      const option=e.target.elements.option.value
      
      if(option){
          app.options.push(option)
          e.target.option.value=''
      }
      
      fromRender()
  }

  const onclickHandler=()=>{
      app.options=[]
      fromRender()
  }
  const onMakeDecision=()=>{
      const randomNum=Math.floor(Math.random() * app.options.length)
      const option=app.options[randomNum]
      alert(option)
      
  }
  
  let visibility=false; 

  const onShowMe=()=>{
    visibility=!visibility
    
    fromRender()
  }

  const fromRender=()=>{

    const template=(
    <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length>0?'Here is your option':"add Option"}</p>
    
    <button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do?</button>

    <button onClick={onclickHandler}>Remove All</button>

    <ol>
    {app.options.map((op)=>{return<li key={op}>{op}</li>})}
    </ol>

    <form onSubmit={onSubmitHandle}>
        <input type="text" name="option"/>
        <button>Add option</button>
    </form>

    <h1>Visibility Toggle</h1>
    <button onClick={onShowMe}>{visibility?'hide':'show'}</button>
    {visibility&&(
        <div>
        <p>He there is some info</p>
        </div>
    )}
  </div>
  )
  ReactDOM.render(template, document.getElementById('root'));
  
  }
  
 fromRender()







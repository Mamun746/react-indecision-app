import React from 'react'
import Header from './header'
import Action from './action'
import Options from './options'
import AddOption from './addOptions'
import OptionModal from './optionModal'


 class App extends React.Component{
    
    state={
        options:[],
        selectedOption:undefined
    }

    componentDidMount(){

        try{
            const json=localStorage.getItem('opt')
        const options=JSON.parse(json)

        if(options){
            this.setState(()=>({
                options:options
            }))
        }

        }catch(e){

        } 
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options)
            localStorage.setItem('opt',json)
            
            

            
        }
    }

    handleRemoveAll=()=>{
        // Explicitly return
        this.setState(()=>({
            options:[]
        }))
    }
    handlePick=()=>{
        const randomNum=Math.floor(Math.random()*this.state.options.length)
        const option=this.state.options[randomNum]
        
        this.setState(()=>({
            selectedOption:option
        }))
    }

    handleAddOption=(option)=>{
        if(!option){
            return "Enter valid value to add item"
        }else if(this.state.options.indexOf(option)> -1){
            return "This item is already exist"
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        }) 
    }
    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option
            })
        }))
        
        
    }
    clearModal=()=>{
        this.setState(()=>({
            selectedOption:undefined
        }))
    }
    
    render(){
        return(
            <div >
            <Header/>
            <div className="container">
            <Action
             hasOption={this.state.options.length !== null && this.state.options.length >0 }
              handlePick={this.handlePick}
              />
              <div className="widget">
              <Options 
            options={this.state.options}
             handleRemoveAll={this.handleRemoveAll}
             handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
              </div>
            </div>
            

            <OptionModal selectedOption={this.state.selectedOption} clearModal={this.clearModal}/>
            </div>
        )
    }
}



export default App
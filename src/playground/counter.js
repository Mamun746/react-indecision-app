import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props){
        super(props)
        // this.addOne=this.addOne.bind(this)
        // this.minusOne=this.minusOne.bind(this)
        // this.resetHandle=this.resetHandle.bind(this)
        this.state={
            count:0
        };
    }
    addOne=()=>{
        this.setState((prevState)=>{
            return{
                count:prevState.count +1
            }
        })
    }
    minusOne=()=>{
        this.setState((prevState)=>{
            return{
                count:prevState.count -1
            }
        })
    }
    resetHandle=()=>{
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
   
     
    render() {
        
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addOne}>1+</button>
                <button onClick={this.minusOne}>1-</button>
                <button onClick={this.resetHandle}>reset</button>
            </div>
        )
    }
}

export default Counter
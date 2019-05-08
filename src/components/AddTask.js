import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10);
    state = {  
        text:'',
        checked: false,
        date: this.minDate
    }

    handleClick = () => {
console.log('working')
const {text,date,checked} = this.state
if(text.length > 2) {
const add = this.props.add(text,date,checked);
if (add) {
    this.setState({
        text:'',
        checked: false,
        date:this.minDate
    })
}
    }
    else {
        alert('minimum three words')
    }}

    handleCheckbox = (e) => {
        this.setState({
    checked: e.target.checked
        })
    }
    handleTextChange = (e) => {
        this.setState({
        text:e.target.value
        })
    }

handleDate = (e) => {
    this.setState({
        date:e.target.value
    })
}
    render() { 
let maxDate = this.minDate.slice(0,4) * 1 + 1;
maxDate = maxDate + "-12-31";

        return ( 
            <>
            <div className ="form">

<input type="text"placeholder="add task" value={this.state.text}onChange={this.handleTextChange}/>
<br/>

<label htmlFor="date">Until</label>

<input type="date" value={this.state.date} min={this.minDate}max={maxDate}
onChange={this.handleDate}/>

<label htmlFor="important">Priority</label>

<input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>

<button onClick={this.handleClick}>Add</button>

   </div>
            <hr/>
            </>
         );
    }
}
 
export default AddTask;
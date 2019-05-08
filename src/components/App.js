import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {

  counter = 4;

  state = {
    tasks: [
    {id:0,
    text: 'Buy some vegtabales',
    date: '2019-02-20',
    important: false,
    active: true,
    finishDate:null
  },
  {id:1,
    text: 'Upload next project',
    date: '2030-02-20',
    important: true,
    active: true,
    finishDate:null
  },
  {id:2,
    text: 'Call parents',
    date: '2019-02-20',
    important: true,
    active: true,
    finishDate:null
  },
  {id:3,
    text: 'Buy bike tires',
    date: '2019-02-20',
    important: true,
    active: true,
    finishDate:null
  },
    ]
  }
deleteTask = (id) => {
  console.log("delete works"  + id);

  // Metoda 1 ze find idexem i splicem

  // const tasks = [...this.state.tasks];
  // const index = tasks.findIndex(task => task.id ===id)
  // tasks.splice(index,1)
  // this.setState({
  //   tasks
  // })
let tasks = [...this.state.tasks];
tasks = tasks.filter(task => task.id !== id)
this.setState({
  tasks
})


}

changeTaskStatus = (id) => {
  console.log("change works" + id);
  const tasks = Array.from(this.state.tasks);
  tasks.forEach(task => {
    if(task.id ===id){
      task.active=false;
      task.finishDate = new Date().getTime()
    }
  })
  this.setState({
    tasks
  })
}
addTask = (text,date,important) => {
  // console.log('dodany tekst')
  const task = { 
    id: this.counter,
    text: text,
    date: date,
    important: important,
    active: true,
    finishDate:null
  }
  this.counter++
  console.log(task,this.counter);

  this.setState(prevState => ({
    tasks: [...prevState.tasks, task]
  }))

  return true
  
}


  render() {
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    )
  }
}

export default App;

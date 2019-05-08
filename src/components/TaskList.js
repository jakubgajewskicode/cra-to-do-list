import React from 'react';
import Task from './Task'

const TaskList = (props) => {
const active = props.tasks.filter(task => task.active);
const done = props.tasks.filter(task => !task.active);



    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete}
    change={props.change}/>)

    const doneTasks = 
    done.map(task => <Task key={task.id} task={task} delete={props.delete}change={props.change}/>)



    return ( 
        <>
        <div className ="active">
         <h1>Task List to Do</h1> 
           {activeTasks.length > 0 ? activeTasks : <p>Nothing to Do. Do Something!</p> }
       
        </div>

        <hr/>

        <div className ="nonactive">
        <h3>Tasks Done  <em>({done.length})</em></h3> {done.length > 3 &&  <span style={{fontSize: "50px"}} > These are just last 3 tasks</span>}
        {doneTasks.slice(0,3)}
          
       </div>
</>

     );
}
 
export default TaskList;
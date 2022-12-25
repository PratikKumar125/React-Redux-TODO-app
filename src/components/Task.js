import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtask } from '../Actions/TaskActions'
import "../App.css"
const Task = () => {
    const cartState = useSelector((state) => state.TASKSTATE)
    const[taskwrite, settask] = useState("")
    const dispatch = useDispatch();
    const handleit = () => {
      settask("")
      dispatch(addtask(taskwrite))
    }
  return (
    <div className='TASKS'>
        <h1>Enter New Task</h1>
        <input type="text" onChange={(e) => settask(e.target.value)}/>
        <button onClick={handleit}>+</button>
    </div>
  )
}
export default Task
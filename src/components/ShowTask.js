import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtask, removetask } from '../Actions/TaskActions'
import "../App.css"
const ShowTask = () => {
    const cartState = useSelector((state) => state.TASKSTATE)
    const dispatch = useDispatch();
  return (
    <div className='TASKDETALS'>
        {
            cartState.map((curr, index) => {
                return<>
                    <h1>{curr}</h1> <button onClick={() => dispatch(removetask(curr))}>Remove</button>
                </>
            })
        }
    </div>
  )
}
export default ShowTask
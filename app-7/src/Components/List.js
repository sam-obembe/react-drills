import React from 'react'
import Todo from './Todo'

function List(props){
  let list = props.tasks.map((e,i) => {
    return (
      <Todo key ={i} task = {e}/>
    )
  })
  return(
    <div>
      {list}
    </div>
  )
}

export default List
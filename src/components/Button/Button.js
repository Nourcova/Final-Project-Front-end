import React from 'react'

function Button({text,w,onClick}) {
  return (
    <button style={{width:w, backgroundColor:"#58EF79"}} className = "btn" onClick={()=>{onClick()}}>{text}</button>
  )
}

export default Button
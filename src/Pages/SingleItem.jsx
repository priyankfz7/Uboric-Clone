import React from 'react'

const SingleItem = ({image,name,price}) => {
  return (
    <div style={{textAlign:"center",cursor:"pointer"}}>
        <img src={image} alt={name} style={{width:"100%",marginBottom:"10px"}}/>
        <div style={{width:"80%",marginBottom:"7px",margin:"auto"}}><p>{name}</p></div>
        <h2 style={{color:"red"}}>{`₹${price}`}</h2>
    </div>
  )
}

export default SingleItem
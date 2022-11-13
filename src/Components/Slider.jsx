import React from 'react'

const slider = () => {
  return (
    <div backgroundColor="1px solid red">
        <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item " data-bs-interval="1000">
      <img style={{height:"580px"} } src="grocery-3.jpg" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img style={{height:"580px"} } src="electronics.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:"580px"} }src="clothing-3.jpg "className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:"580px" }} src="health-care-4.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span  className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
  )
}

export default slider
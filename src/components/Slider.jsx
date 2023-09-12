import React from 'react'

function Slider() {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner" style={{"objectFit":"fit"}}>
  <div className='carousel-caption' style={{"z-index":"10"}}>
  <form>
  <div className='d-flex z-1'>
  <label>find</label>
    <input type='Search' placeholder='search' className='form-control m-2'>

    </input>
    <button className='btn btn-outline-success' type='submit'>Search</button>
  </div>
 
  </form>
  </div>
    <div className="carousel-item active">
      <img  height={500} src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img width={300} height={500}  src="https://source.unsplash.com/random/300x300/?food" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img width={300} height={500}  src="https://source.unsplash.com/random/300x300?/?momos" className="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
 
</div>
    </div>
  )
}

export default Slider
import React from 'react'

const Cards = (props) => {
  return (
    <div className='Card'>
      <div className="card-container">
        <img src={`./images/${props.image}`} className='locImg' />
      </div>
      <div className="card-content">
        <div className='location'>
          <img src='./images/gpsmarker.png' alt='gps' className='card-location' />
          <span>{props.location}</span> <a href="#" className='maps'><u>View on Google maps</u></a>
        </div>
        <div className='title'>
          <h1>{props.title}</h1>
        </div>
        <div className="season-visit">
          <b>{props.season}</b>
        </div>
        <div className="desc">
          <p>{props.desc}</p>
        </div>
      </div>

    </div>
  )
}
export default Cards
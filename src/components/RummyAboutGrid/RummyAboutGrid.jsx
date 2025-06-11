import React, { useState } from 'react'
import './RummyAboutGrid.css'

function RummyAboutGrid() {
  const [showMore1, setShowMore1] = useState(false)
  const [showMore2, setShowMore2] = useState(false)
  const [showMore3, setShowMore3] = useState(false)
  const [showMore4, setShowMore4] = useState(false)
  const [showMore5, setShowMore5] = useState(false)

  return (
    <div className='rummy-about-grid'>

      <div className='rummy-about-grid-item'>
        <div className='rummy-about-grid-image-title-wrap'>
          <img src="/rummyPage/variations/point-rummy.webp" alt="" />
          <h3>Rummy Points</h3>
        </div>
        <p>
          A variation fast-paced in which every point has a 
          {showMore1 && " predefined value. The first declaring player gains by using appropriate sets and sequences."}
          <button onClick={() => setShowMore1(!showMore1)} className="read-more-btn">
            {showMore1 ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>

      <div className='rummy-about-grid-item'>
        <div className='rummy-about-grid-image-title-wrap'>
          <img src="/rummyPage/variations/pool-rummy.webp" alt="" />
          <h3>Rummy in Pools</h3>
        </div>
        <p>
          Individuals add chips to a pool. Being the last
          {showMore2 && " person standing after removing others depending on points is the aim."}
          <button onClick={() => setShowMore2(!showMore2)} className="read-more-btn">
            {showMore2 ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>

      <div className='rummy-about-grid-item'>
        <div className='rummy-about-grid-image-title-wrap'>
          <img src="/rummyPage/variations/deal-rummy.webp" alt="" />
          <h3>Rummy Dealings</h3>
        </div>
        <p>
          Players battle throughout a set deal count.
          {showMore3 && " The one with the most chips in the end takes home."}
          <button onClick={() => setShowMore3(!showMore3)} className="read-more-btn">
            {showMore3 ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>

      <div className='rummy-about-grid-item'>
        <div className='rummy-about-grid-image-title-wrap'>
          <img src="/rummyPage/variations/gin-rummy.webp" alt="" />
          <h3>Rummy of Gin</h3>
        </div>
        <p>
          Popular in Western markets, Gin Rummy generally 
          {showMore4 && "concentrates on creating melds and a low deadwood point count."}
          <button onClick={() => setShowMore4(!showMore4)} className="read-more-btn">
            {showMore4 ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>

      <div className='rummy-about-grid-item'>
        <div className='rummy-about-grid-image-title-wrap'>
          <img src="/rummyPage/variations/rummy.webp" alt="" />
          <h3>Indian Rummy</h3>
        </div>
        <p>
          Often favoured in the Indian gaming scene, it is
          {showMore5 && " the traditional form of rummy was with 13 cards."}
          <button onClick={() => setShowMore5(!showMore5)} className="read-more-btn">
            {showMore5 ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>

    </div>
  );
}

export default RummyAboutGrid;

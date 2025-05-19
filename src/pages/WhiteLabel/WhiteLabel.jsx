import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import WhiteLabelSkillGames from './WhiteLabelSkillGames/WhiteLabelSkillGames'
import WhiteLabelCasino from './WhiteLabelCasino/WhiteLabelCasino'
import './WhiteLabel.css'

const WhiteLabel = () => {
  return (
    <div className="white-label">
      <div className="white-label-container">
        <Routes>
          <Route index element={
            <>
              <Link to="skill-games"><WhiteLabelSkillGames /></Link>
              <Link to="casino"><WhiteLabelCasino /></Link>
            </>
          } />
          <Route path="skill-games" element={<WhiteLabelSkillGames />} />
          <Route path="casino" element={<WhiteLabelCasino />} />
        </Routes>
      </div>
    </div>
  )
}

export default WhiteLabel
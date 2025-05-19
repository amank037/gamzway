import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import RummyGame from './RummyGame/RummyGame'
import PokerGame from './PokerGame/PokerGame'
import LudoGame from './LudoGame/LudoGame'
import CallBreakGame from './CallBreakGame/CallBreakGame'
import TambolaGame from './TambolaGame/TambolaGame'
import SnakeLadderGame from './SnakeLadderGame/SnakeLadderGame'
import './SkillGames.css'

const SkillGames = () => {
  return (
    <div className="skill-games">
      <div className="skill-games-container">
        <Routes>
          <Route index element={
            <>
              <Link to="rummy"><RummyGame /></Link>
              <Link to="poker"><PokerGame /></Link>
              <Link to="ludo"><LudoGame /></Link>
              <Link to="call-break"><CallBreakGame /></Link>
              <Link to="tambola"><TambolaGame /></Link>
              <Link to="snake-ladder"><SnakeLadderGame /></Link>
            </>
          } />
          <Route path="rummy" element={<RummyGame />} />
          <Route path="poker" element={<PokerGame />} />
          <Route path="ludo" element={<LudoGame />} />
          <Route path="call-break" element={<CallBreakGame />} />
          <Route path="tambola" element={<TambolaGame />} />
          <Route path="snake-ladder" element={<SnakeLadderGame />} />
        </Routes>
      </div>
    </div>
  )
}

export default SkillGames
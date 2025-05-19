import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SkillGamesAPI from './SkillGamesAPI/SkillGamesAPI'
import CasinoAPI from './CasinoAPI/CasinoAPI'
import RummyGameAPI from './RummyGameAPI/RummyGameAPI'
import TeenPattiGameAPI from './TeenPattiGameAPI/TeenPattiGameAPI'
import PokerGameAPI from './PokerGameAPI/PokerGameAPI'
import LudoGameAPI from './LudoGameAPI/LudoGameAPI'
import AndarBaharAPI from './AndarBaharAPI/AndarBaharAPI'
import './GameAPIs.css'

const GameAPIs = () => {
  return (
    <div className="game-apis">
      <div className="game-apis-container">
        <Routes>
          <Route index element={
            <>
              <Link to="skill-games"><SkillGamesAPI /></Link>
              <Link to="casino"><CasinoAPI /></Link>
              <Link to="rummy"><RummyGameAPI /></Link>
              <Link to="teen-patti"><TeenPattiGameAPI /></Link>
              <Link to="poker"><PokerGameAPI /></Link>
              <Link to="ludo"><LudoGameAPI /></Link>
              <Link to="andar-bahar"><AndarBaharAPI /></Link>
            </>
          } />
          <Route path="skill-games" element={<SkillGamesAPI />} />
          <Route path="casino" element={<CasinoAPI />} />
          <Route path="rummy" element={<RummyGameAPI />} />
          <Route path="teen-patti" element={<TeenPattiGameAPI />} />
          <Route path="poker" element={<PokerGameAPI />} />
          <Route path="ludo" element={<LudoGameAPI />} />
          <Route path="andar-bahar" element={<AndarBaharAPI />} />
        </Routes>
      </div>
    </div>
  )
}

export default GameAPIs
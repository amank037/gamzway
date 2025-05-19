import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LiveCasino from './LiveCasino/LiveCasino'
import RNGGames from './RNGGames/RNGGames'
import Slots from './Slots/Slots'
import CrashGames from './CrashGames/CrashGames'
import TableGames from './TableGames/TableGames'
import FishingGames from './FishingGames/FishingGames'
import './CasinoGames.css'

const CasinoGames = () => {
  return (
    <div className="casino-games">
      <div className="casino-games-container">
        <Routes>
          <Route index element={
            <>
              <Link to="live-casino"><LiveCasino /></Link>
              <Link to="rng-games"><RNGGames /></Link>
              <Link to="slots"><Slots /></Link>
              <Link to="crash-games"><CrashGames /></Link>
              <Link to="table-games"><TableGames /></Link>
              <Link to="fishing-games"><FishingGames /></Link>
            </>
          } />
          <Route path="live-casino" element={<LiveCasino />} />
          <Route path="rng-games" element={<RNGGames />} />
          <Route path="slots" element={<Slots />} />
          <Route path="crash-games" element={<CrashGames />} />
          <Route path="table-games" element={<TableGames />} />
          <Route path="fishing-games" element={<FishingGames />} />
        </Routes>
      </div>
    </div>
  )
}

export default CasinoGames
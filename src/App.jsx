import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import SkillGames from './pages/SkillGames/SkillGames'
import CasinoGames from './pages/CasinoGames/CasinoGames'
import GameAPIs from './pages/GameAPIs/GameAPIs'
import WhiteLabel from './pages/WhiteLabel/WhiteLabel'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill-games/*" element={<SkillGames />} />
          <Route path="/casino-games/*" element={<CasinoGames />} />
          <Route path="/game-apis/*" element={<GameAPIs />} />
          <Route path="/white-label/*" element={<WhiteLabel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

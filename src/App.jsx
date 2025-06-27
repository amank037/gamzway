import './App.css'
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import SkillGames from './pages/SkillGames/SkillGames'
import CasinoGames from './pages/CasinoGames/CasinoGames'
import GameAPIs from './pages/GameAPIs/GameAPIs'
import WhiteLabel from './pages/WhiteLabel/WhiteLabel'
import Contacts from './pages/Contacts/Contacts'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ChatOverlay from './components/ChatOverlay/ChatOverlay'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill-games/*" element={<SkillGames />} />
            <Route path="/casino-games/*" element={<CasinoGames />} />
            <Route path="/game-apis/*" element={<GameAPIs />} />
            <Route path="/white-label/*" element={<WhiteLabel />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        <Footer />
        <ChatOverlay/>
      </div>
    </Router>
  )
}

export default App

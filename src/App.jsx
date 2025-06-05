import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'


const Home = lazy(() => import('./pages/Home/Home'))
const SkillGames = lazy(() => import('./pages/SkillGames/SkillGames'))
const CasinoGames = lazy(() => import('./pages/CasinoGames/CasinoGames'))
const GameAPIs = lazy(() => import('./pages/GameAPIs/GameAPIs'))
const WhiteLabel = lazy(() => import('./pages/WhiteLabel/WhiteLabel'))

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill-games/*" element={<SkillGames />} />
            <Route path="/casino-games/*" element={<CasinoGames />} />
            <Route path="/game-apis/*" element={<GameAPIs />} />
            <Route path="/white-label/*" element={<WhiteLabel />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App

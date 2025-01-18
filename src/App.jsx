import { Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import { MovieProvider } from './context/MovieContext'


function App() {

  return (
    <MovieProvider>
      <div>
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorite' element={<Favorites />} />
          </Routes>
        </main>
      </div>

    </MovieProvider>

  )
}

export default App

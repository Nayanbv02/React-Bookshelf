import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Foro from './pages/Foro';
import Authors from './pages/Authors';
import Books from './pages/Books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Authors' element={<Authors />} />
        <Route path='/Books' element={<Books />} />
        <Route path='/Foro' element={<Foro />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

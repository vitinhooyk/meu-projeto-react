import { Routes, Route, Link } from 'react-router-dom'
import Nome from './pages/Nome'
import Sobrenome from './pages/Sobrenome'
import Completo from './pages/Completo'
import './App.css'
import Eu from './pages/Eu'
function App() {
  return (
    <div className='tela-inicio'>
      <nav>
        <Link to="nome">Nome</Link> | <Link to="/sobrenome">Sobrenome</Link> | <Link to='/completo'>Nome Completo</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Eu/>} />
        <Route path="/nome" element={<Nome/>} />
        <Route path="/sobrenome" element={<Sobrenome />} />
        <Route path='/completo' element={<Completo/>}/>
      </Routes>
    </div>
  )
}

export default App

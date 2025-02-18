import { HashRouter, Routes, Route } from 'react-router-dom';
import { Background } from './UI/Background';
import { Home } from './Routes/Home';
import { Nav } from './UI/Nav';

function App() {

  return (
    <>
      <HashRouter>

        <Nav/>

        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/game' element={<Game/>} />
          <Route path='*' element={<p>Not found</p>} /> */}
        </Routes>

        <Background/>

      </HashRouter>
    </>
  )
}

export default App

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Background } from './UI/Background';
import { Home } from './Routes/Home';
import { Products } from './Routes/Products';
import { Us } from './Routes/Us';
import { Nav } from './UI/Nav';
import { Footer } from './UI/Footer';

function App() {

  return (
    <>
      <HashRouter>

        <Nav/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:search' element={<Products/>} />
          <Route path='/us' element={<Us/>} />
          <Route path='*' element={<h1 style={{margin:"100px"}}>Not found</h1>} />
        </Routes>

        <Footer/>

        <Background/>

      </HashRouter>
    </>
  )
}

export default App

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Books from './components/Books/Books';
import Authors from './components/Authors/Authors';
import Filter from './components/Filter';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Header />
        </header>

        <main>
          <aside>
            <Filter />
          </aside>

          <div className='content'>
            <Routes>
              <Route path='/books' element={<Books />} />
              <Route path='/authors' element={<Authors />} />
            </Routes>
          </div>        
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

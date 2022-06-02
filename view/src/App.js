import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Books from './components/Books/Books';
import Authors from './components/Authors/Authors';
import Footer from './components/Footer';
import Filter from './components/Filter';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />

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

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

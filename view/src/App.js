import './App.css';
import Header from './components/Header';
import Books from './components/Books/Books';
import Authors from './components/Authors/Authors';
import Footer from './components/Footer';
import Filter from './components/Filter';


function App() {
  return (
    <div className="wrapper">
      <Header />

      <main>
        <aside>
          <Filter />
        </aside>

        <div className='content'>
          {/* <Books /> */}
          <Authors />
        </div>        
      </main>

      <Footer />
    </div>
  );
}

export default App;

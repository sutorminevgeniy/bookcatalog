import './App.css';
import Header from './components/Header';
import Books from './components/Books';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className='content'>
        <Books />
      </div>
      <Footer />
    </div>
  );
}

export default App;

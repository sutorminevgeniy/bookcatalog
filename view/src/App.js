import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="navigate">
        <li>Книги</li>
        <li>Авторы</li>
        <li>Жанры</li>
      </ul>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;

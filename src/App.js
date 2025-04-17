import Navbar from './src/Navbar/Navbar';
import Hero from './src/Hero/Hero';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Navbar />
        <Hero />
        <Search />
      </header>
    </div>
  );
}

export default App;

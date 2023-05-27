import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home/>} />
          </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

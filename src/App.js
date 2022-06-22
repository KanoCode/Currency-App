import './styles/App.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <FaMicrophone />
        <IoMdSettings />
      </header>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

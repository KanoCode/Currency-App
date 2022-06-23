import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './pages/profile';
// import getProfileData from './redux/actions/Profle-action';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

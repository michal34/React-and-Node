import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Classes from './components/classes';
import Plans from './components/plans'
import Subjects from './components/subjects'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/home/classes" element={<Classes />} />
        <Route path="/home/plans" element={<Plans />} />
        <Route path="/home/subjects" element={<Subjects />} />
      </Routes>
    </div>
  );
}

export default App;

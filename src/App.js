import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Componentss/Home';
import AddComment from './Componentss/AddComment';
import Header from './Componentss/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddComment' element={<AddComment />} />
      </Routes>
    </div>
  );
}

export default App;
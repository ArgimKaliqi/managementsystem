import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/Login/Login';
import Board from './board';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/clients' element={<Navbar />} />
        <Route path='/admin' element={<Board />} />
        </Routes>   
    </>
  );
}

export default App;
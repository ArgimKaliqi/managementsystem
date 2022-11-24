import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/clients' element={<Navbar />} />
        </Routes>    
  </>
  );
}

export default App;

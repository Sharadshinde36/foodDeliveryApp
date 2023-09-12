import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App w-full h-full overflow-hidden">
  
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
     <Route exact path="/signup" element={<Signup/>}></Route>
     <Route exact path="/cart" element={<Cart/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

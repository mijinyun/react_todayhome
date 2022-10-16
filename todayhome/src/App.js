import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Store from './Store.js';
import Search from './components/page/search/Search';
import Login from './components/page/user/Login';
import Move from './Move.js';

function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/search/' element={<Search />}></Route>
          <Route path='/users/login' element={<Login />}></Route>
          <Route path='/register' element={<Move />}></Route>
          <Route path='/experts' element={<Move />}></Route>
          <Route path='/FAQ' element={<Move />}></Route>
        </Routes>    
    </div>
  );
}

export default App;

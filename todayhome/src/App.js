import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Store from './Store.js';
import Search from './components/page/search/Search';

function App() {

  const location = useLocation();

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/search/index' element={<Search />}></Route>
        </Routes>    
    </div>
  );
}

export default App;

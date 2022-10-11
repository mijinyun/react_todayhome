import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Store from './Store.js';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/store' element={<Store />}></Route>
        </Routes>    
    </div>
  );
}

export default App;

import Header from './components/header/header.js';
import HomeMain from './components/page/main/homeMain.js';
// import Store from './Store.js';

function Main() {
  return (
    <div className="Main" style={{width:'100%', boxSizing:'border-box'}}>
        <Header />
        <HomeMain />

    </div>
  );
}

export default Main;

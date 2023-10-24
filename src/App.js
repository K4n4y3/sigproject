import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const searchBar = () => {}
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className='header__logo'>Anime quotes</div>

          <nav className='nav'>
            <a href='https://vk.com/maturboi' className='navlink'><div className='text'>VK</div></a>
            <a href='https://steamcommunity.com/id/MATURBOII/' className='navlink'><div className='text'>Steam</div></a>
          </nav>
        </div>
      </div>
    </header>
    <div className='intro'>
      <div className='container'>
        <h1 style={{ textalign: "center" }}></h1>
      </div>
     </div> 
    </>
  );
}

export default App;

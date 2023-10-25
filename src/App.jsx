import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BsSteam } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

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
            <a href='https://github.com/K4n4y3' className='navlink'><AiFillGithub size={20}/></a>
            <a href='https://steamcommunity.com/id/MATURBOII/' className='navlink'><BsSteam size={20}/></a>
          </nav>
        </div>
        <div className='searchdiv'>
        <input className='searchbar' type='text' placeholder='Enter a Quote'></input>
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

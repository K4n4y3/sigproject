import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BsSteam } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';


function App() {
  const Initialdata =[
    {
      name: "Naruto",
      quote: "Лучше я буду сожалеть о том, что сделал, чем о том, что не смог сделать, когда была возможность",
    },
    {
      name: "Itachi",
      quote: "Впереди у нас ещё целая жизнь, а некоторые уже говорят, что у них нет времени.",
    },
    {
      name: "Sasuke",
      quote: "Меня зовут Саске Учиха. Мне много чего не нравится, и очень мало что нравится.",
    },
  ]
  const [data, setData] = useState(Initialdata);
  const [displayData, setDisplayData] = useState(Initialdata);
  const [inputCharacter,setInputCharacter] = useState('');
  const [inputQuote,setInputQuote] = useState('');
  const [filterName,setFilterName] = useState('');
  const [displayDataFiltered, setDisplayDataFiltered] = useState([]);

  
  const addQuote=( ) =>{
    if(inputCharacter!='' && inputQuote!=''){
      let newQuote={
        name: inputCharacter,
        quote: inputQuote,
      };
      setDisplayData([...displayData,newQuote]);
      console.log(displayData);
      console.log(inputCharacter,inputQuote);
      data.push(newQuote);
      console.log(data);
    }
  }
  
  useEffect(() => {
    // Filter the data based on the filterName
    const filteredData = data.filter(element => element.name.includes(filterName));
    setDisplayDataFiltered(filteredData);
  }, [data, filterName]);

  const searchInputHandler=(value)=>{
    setFilterName(value);
  }


 




  

  return (
    <div className='website'>
      <div className='background'></div>
      <div className='dark-overlay'></div>
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
            <div style={{display:"flex",flexDirection:"row"}}>
          <input className='searchbar' type='text' placeholder='Enter a Character' value={inputCharacter} onChange={(event)=>{setInputCharacter(event.target.value)}} />
          <input className='searchbar' type='text' placeholder='Enter a Quote' value={inputQuote} onChange={(event)=>{setInputQuote(event.target.value)}} />
          <button className='searchbutton'  onClick={addQuote}><BiSearch size={20}/></button>
            </div>
            <div>
              <input className='searchbar' value={filterName} placeholder='Search by name...' onChange={(event)=>{searchInputHandler(event.target.value)}}/>
            </div>
          </div>
        </div>
      </header>
      <div className='intro'>
        <div className='ass'>
          <ul>
            {filterName==''?
              displayData.map((item,index) => (
                  <li key={index}>
                    {item.name} - {item.quote}
                  </li>
                )):
                displayDataFiltered.map((item,index) => (
                  <li key={index}>
                    {item.name} - {item.quote}
                  </li>
                ))
              }</ul>
            </div>
      </div> 
    </div>
  );
}

export default App;

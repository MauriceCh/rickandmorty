
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import './styles.css'
import RickMortyItem from './assets/components/RickMortyItem';
import header from './assets/img/a969db2fa066e5066401bbfb6151f784.jpg';


function App() {
  const [rickLocation, setRickLocation] = useState({});
  const [typeLoc, setTypeLoc] = useState("");


  document.body.style.backgroundColor = "black";
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1

    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setRickLocation(res.data));
  }, []);

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeLoc}`)
      .then(res => setRickLocation(res.data));
  }

  return (
    <div className="App">
      <div className="header">
        <img src={header} />
      </div>

      <h1>{rickLocation.name}</h1>
      <h2>Type: {rickLocation.type}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Dimension: {rickLocation.dimension}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Population: {rickLocation.residents?.length}</h2>
       <input
        type="text"
        value={typeLoc}
        onChange={e => setTypeLoc(e.target.value)}
      />
      <button onClick={searchLocation}>Search</button>
      <ul className='resident-container'>
        {
          rickLocation.residents?.map(residents => (
            <RickMortyItem
              url={residents}
              key={residents}
            />
      ))}
      </ul>
    </div>
  )
}

export default App

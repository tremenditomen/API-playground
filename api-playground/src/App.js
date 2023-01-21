import {react, useState} from 'react';
import axios from 'axios'
import './App.css';
require ("dotenv").config()
function App() {
  const [currentInput, setCurrentInput] = useState("")
  const[playerData ,setPlayerData] = useState({})
  
  const handleClick = (e)=>{
    let APICallString =`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${currentInput}?api_key=${process.env.REACT_APP_API_KEY}`
    axios.get(APICallString).then((response)=>{
      setPlayerData(response.data)

      
    }).catch((error)=>{
      console.log("ERROR",error);
      
      
    })
    setCurrentInput("")
  }
  console.log("RESPONSE",playerData);



  return (
    <div className="App">
     <div className='container'>

          <h1>testing out apis with ajax</h1>
          <input type={'text'} placeholder={"enter LOL name here"} key="gamertag" onChange={(e)=>setCurrentInput(e.target.value)} ></input>
          <button onClick={handleClick}> search</button>
          <h2></h2>
      
     </div>
     {JSON.stringify(playerData) !== "{}"?<> <p>{playerData.name}</p>
     <img width={"100"} length = {"100"} src = {`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerData.profileIconId}.png`}></img>
     <p>summoner Level : {playerData.summonerLevel} </p>
     </>
      : 
      <><p>we dont have player data</p></>}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
function App() {
  const url = "https://xcountries-backend.azurewebsites.net/all";
  const [countryData, setCountryData] = useState([]);
   useEffect(()=>{
    const getData = async () =>{
      try{
        const data = await axios.get(url);
        setCountryData(data.data);
        console.log(data);
     }catch(error){
       console.error("Error fetching data: ",error)
     }
    }
    getData();
   
   },[])
  const Card = ({country})=>{
    return(
      <>
      <div style={{
        flexDirection:"column",
        border:"1px solid gray",
        borderRadius:"8px",
        width:"150px",
        display:"inline-block",
        margin:"10px",
        padding:"5px"
      }}>
      
      <img src={country.flag} alt={country.abbr} width="150px" height="100px"/>
      <h3 style={{textAlign:"center"}}>{country.name}</h3>
      </div>
      </>
    )
    
  }
  return (
    <div className="App">
      {countryData.map((country)=>{
        return <Card key={country.abbr} country={country} />
      })}
      
    </div>
  );
}

export default App;

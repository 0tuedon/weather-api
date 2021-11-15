import { useState } from 'react';
import Details from './components/Details';
import Header from './components/Header';
import MoreForeCast from './components/MoreForcast';
import {WeatherctxProvider}from './store/weatherContext'


function App() {
  const [isLoading,setIsLoading] = useState(true)
  setTimeout(()=>{
    setIsLoading(false)
  }
  ,3000)
  return (
    <WeatherctxProvider>
       <div className="container">
       {isLoading&&<h1>Loading......</h1>}
      {!isLoading&& <Header/>}
      {!isLoading&&<Details/>}
      {!isLoading&&<MoreForeCast/>}
    </div>
    </WeatherctxProvider>
      
   
  );
}

export default App;

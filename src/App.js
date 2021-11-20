import { useContext} from 'react';
import Details from './components/Details';
import Header from './components/Header';
import Loading from './components/Loading';
import MoreForeCast from './components/MoreForcast';
import WeatherCtx from './store/weatherContext'


const  App = ()=>  {
  const ctx = useContext(WeatherCtx)

  return (
   
       <div className="container">
    {ctx.isLoading&& <Loading/>}
       {!ctx.isLoading&&<Header/>}
       {!ctx.isLoading && <Details/>}
      {!ctx.isLoading && <MoreForeCast/>}
     </div>

  );
}

export default App;

import {useState,useEffect} from 'react'; 

function App() {
  const [data,setData] = useState({})
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=abuja&appid=54dd919bfdd8425a9c09edb660c119ff`)
  .then( res => 
    {
      return res.json();
    }
  )
  .then(data=>{
    setData(data)
    return data
  })

    
  }, [])
  
console.log(data)

  return (
    <div></div>
  );
}

export default App;

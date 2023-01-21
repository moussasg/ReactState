import './App.css';
import { useState } from 'react';
import Conteur from './conteur/conteur';
function App() {
  const [ isloading , setIsloading ] = useState(false);  // var isloading / valeur initiale false
  return (
    <>
    {/*change valeur isloading en setIsloading(!isloading)*/}
    <button onClick={()=>setIsloading(!isloading)}> {/*redina isloading=true ki tkliki*/}
    {/* tkliki (!isloading) false tredha true , true tredha false ,  
  si isloading est true affichera "Loading..."
  si isloading est false* afichera load data */}
        {isloading ? "is loading"  : "Load Data" } 
    </button>
    <Conteur isloading={isloading}></Conteur>
    </>
  );
}

export default App;


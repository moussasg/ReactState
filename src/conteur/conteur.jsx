import React from 'react'
import Info from '../constants/constantes'
import { useEffect ,useState } from 'react'
import Descr from '../componenets/descr'
export default function Conteur({isloading}) {
    const [conteur , setConteur] = useState(0) // valeur initiale 0
   useEffect( ()=> { 
    setInterval(()=> { setConteur(conteur+ 1)  }, 1000) } , [conteur])
  return (
    <>
    {/*matro7che la deuxiemme ghir ila kante la premiére juste*/}
    {isloading && conteur} 
     {isloading && 
// afficher (Info) seulement si la variable "isloading" est vraie//
          Info.map((el, index) => ( 
          <div key={index}>
            <Descr Ourp={el} />
            <img src={el.img} />
          </div>
        ))}
    </>
  )
   }

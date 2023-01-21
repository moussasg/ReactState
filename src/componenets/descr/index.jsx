import React from 'react'
export default function Descr({Ourp:{fullname,bio,prof}}) {
  return (
    <>
    <div>
        <h1>Fullname : {fullname} </h1>
        <h1>Bio : {bio}</h1>
        <h1>Profession :{prof} </h1>
    </div>
    </>
  )
}

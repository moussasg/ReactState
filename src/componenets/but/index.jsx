import React from 'react'
export default function But() {
    const handk = e => {
        e.preventDefault()
        console.log()
    }
  return (
    <button onClick={handk}> clique</button>
  )
}

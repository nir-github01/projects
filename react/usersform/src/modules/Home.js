import React from 'react'

function Home({userName}) {
  return (
    <div>
      <h1>Welcome {  userName ? userName : "" }</h1>
    </div>
  )
}

export default Home;
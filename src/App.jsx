import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { puppyList } from './data.js'
import './App.css'


function App() {

  // const [puppies, setPuppies] = useState(puppyList);

  const [featPupId, setFeatPupId] = useState(null)

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppyList.find((pup) => pup.id === featPupId);

  console.log("featuredPup: ", featuredPup);
  // console.log("puppyList: ", puppyList);
  // {()=>{console.log("puppy id: ", puppy.id)}}

  return (
    <>
      <div className="App">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        {puppyList.map((puppy) => {
        return (
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
        );
      })}
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      </div>
      
      
    </>
  )
}

export default App

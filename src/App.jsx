import {useState} from 'react';
import { puppyList} from './data.js';
import './App.css';


function App() {

  // const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  const [puppies, setPuppies] = useState(puppyList); 

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
        <div className="puppy-list">
          {puppyList.map((puppy) => (
            <p key={puppy.id} onClick={() => handleClick(puppy.id)} className="puppy-name">
              {puppy.name}
            </p>
          ))}
        </div>
        {featPupId && (
          <div className="featured-puppy">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        </div>
      
      
      
    </>
  )
}

export default App
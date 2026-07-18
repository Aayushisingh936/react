import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BASE_URL } from "../services/api";

function Games() {
    const [games,setGames] = useState([]);

  useEffect(()=>{
    fetch(BASE_URL)
    .then(res=>res.json())
    .then(data=>setGames(data.results));
  },[]);
  return (
    <>
    <Navbar />
     <div className="games-container">
        <h1>Popular Games 🎮</h1>
        <div className="cards">
            {
            games.map((game)=>(
            <div className="card" key={game.id}>
                <img 
                  src={game.background_image}
                  alt={game.name}
                />
                 <h3>{game.name}</h3>
                 <p>
                    ⭐ {game.rating}
                </p>
            </div>
        ))
      }
         </div>
       </div>
      </>
      )
    }
export default Games;
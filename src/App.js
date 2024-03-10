import React from "react"; 
import { useState } from "react";


function App() {
  const [jok,setJoke]=useState({});
      

      async function fetchdata(){
            await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data));
      }
return (<div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center flex-col  h-[70vh] gap-y-6">
<h1 className="text-3xl">Joke Generator</h1>
<h1 className="text-xl">get random jokes and fun</h1>
<button onClick={fetchdata} className="rounded-lg w-[500px] mt-2 p-4 text-2xl bg-orange-500 text-white hover:bg-orange-700">get random Joke</button>

{jok!==undefined?<h1 className="text-2xl leading-10 px-2 w-[500px] break-words">{jok.joke}</h1>:<></>}

     
</div>)

}

export default App;

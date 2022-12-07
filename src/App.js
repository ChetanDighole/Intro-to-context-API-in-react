import { createContext, useState } from "react";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

export const mycontext = createContext()

function App() {

  const [name, setName] = useState("")
  const [color, setColor] = useState("")

  const myName = (event) => {
    setName(event.target.value)
  }

  const myColor = (event) => {
    setColor(event.target.value)
  }

  return (

    <mycontext.Provider value = {{ name , color }}>

      <>
        {/* navbar section */}
        <NavBar />

        {/* form section */}
        <form>
          <input type={"text"} placeholder="Enter your name" value={name} onChange={myName}></input>
          <input type={"text"} placeholder="Enter your color" value={color} onChange={myColor}></input>
        </form>

        {/* hero section */}
        <Hero />

      </>
    </mycontext.Provider>
  );
}

export default App;

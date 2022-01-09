import React from "react";
import styled from "styled-components";
import Infos from "./Components/Infos";


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
`;

const Div2 =styled.div`
  width: 400px;
  height: 500px;
  background-color: #fff;
`;

function App() {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    console.log(event.target.innerText)
    const url = `./Components/json/naruto.json/${event.target.innerText}`;
    const response = await fetch(url)

    const json = await response.json()
    console.log(json)
  }

  return (
    <Div>
      <Div2>
        
        <button onClick={handleClick}>naruto</button>
        <Infos />

      </Div2>
    </Div>
  );
}

export default App;

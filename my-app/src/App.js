import './App.css';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState("You follow a mysterious rabbit, and it leads you here. Jump into the hole?");
  const [buttonClickCount, setButtonClickCount] = useState(0);
  function changeContent() {
    setButtonClickCount(prevCount => {
      const newCount = prevCount + 1;
    console.log (buttonClickCount);
    if (buttonClickCount === 1) {
      setContent("A forest clearing awaits you...You see a door. Enter?");
    } else if (buttonClickCount === 2) {
      setContent("button click 2");
    }
    
    return newCount; // Return the updated count to setButtonClickCount
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escape Room!</h1>
        <a>Alice in Wonderland</a>
      </header>

      <main>
        <button id="startButton" onClick={changeContent}>Yes</button>
        <div id="startDiv">
          <p>{content}</p>
        </div>
      </main>
    </div>
  );
}

export default App;

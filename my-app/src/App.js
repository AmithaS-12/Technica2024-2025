import './App.css';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState("You follow a mysterious rabbit, and it leads you here. Jump into the hole?");
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [currentImage, setCurrentImage] = useState('/background1.png');
  userAnswer = document.querySelector('[name="riddle1"]').value
  realAnswer = "tree"

  function changeContent() {
    setButtonClickCount(prevCount => {
      const newCount = prevCount + 1;
    console.log (buttonClickCount);
    if (buttonClickCount === 0) {
      setCurrentImage('/background2.png');
      setContent("A forest clearing awaits you...You see a door. Enter?");
    } else if (buttonClickCount === 1) {
      setContent("button click 2");
      setCurrentImage('/background2.png');
      if (userAnswer === realAnswer) {
        
      }
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
        <img src={currentImage} alt="First Background" style={{ width: '800px', height: '400px' }}></img>
        <br></br>
        <div id="startDiv">
          <p>{content}</p>
        </div>
        <button id="startButton" onClick={changeContent}>Yes</button>
        <form action="" onsubmit>
          <input type="password" name="riddle1" size="20"></input>
          <input type="button" value="Check" onClick={changeContent}></input>
        </form>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState("You follow a mysterious rabbit, and it leads you here. Jump into the hole?");
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [currentImage, setCurrentImage] = useState('/background1.png');
  const realAnswer1 = "tree";
  const realAnswer2 = "cloud";
  const [showRiddleForm1, setShowRiddleForm1] = useState(false);
  const [showRiddleForm2, setShowRiddleForm2] = useState(false);

  function changeContent() {
    setButtonClickCount(prevCount => {
      const newCount = prevCount + 1;
      
    if (newCount === 1) {
      setCurrentImage('/background2.png');
      setContent("A forest clearing awaits you...You see a door. Enter?");
    } else if (newCount === 2) {
      setContent("The hole you see is full of secrets? Do you want to be a brave traveler and jump in? The answer is yes so go ahead!");
      setCurrentImage('/background2.png');
      setShowRiddleForm1(true);
    }
    return newCount; // Return the updated count to setButtonClickCount
    });
  }

  function checkInput1() {
    const userAnswer1 = document.querySelector('[name="riddle1"]').value
    if (userAnswer1 === realAnswer1) {
      setContent("button click 3");
      setCurrentImage('/background2.png');
      setShowRiddleForm1(false);
      setShowRiddleForm2(true);
    } else {
      setContent("Wrong, try again");
    } 
    return;
  }

  function checkInput2() {
    const userAnswer2 = document.querySelector('[name="riddle2"]').value
    if (userAnswer2 === realAnswer2) {
      setContent("button click 4");
      setCurrentImage('/background2.png');
      setShowRiddleForm2(false);
    } else {
      setContent("Wrong, try again");
    }
    return;
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
        
        {showRiddleForm1 && (
          <form id="riddleForm1" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="riddle1" size="20" />
            <input type="button" value="Check" onClick={checkInput1} />
          </form>
        )}

        {showRiddleForm2 && (
          <form id="riddleForm2" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="riddle2" size="20" />
            <input type="button" value="Check" onClick={checkInput2} />
          </form>
        )}

        <button onClick={changeContent}>Yes</button>
      </main>
    </div>
  );
}

export default App;

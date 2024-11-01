import './App.css';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState("You follow a mysterious rabbit, and it leads you here. Jump into the hole?");
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [currentImage, setCurrentImage] = useState('/background1.png');
  const realAnswer1 = "tree";
  const realAnswer2 = "leaf";
  const realAnswer3 = "4";
  const realAnswer3Alt = "four";
  const realAnswer4 = "sunflower";
  const [showButton, setShowButton] = useState(true);
  const [imageWidth, setImageWidth] = useState(400); 
  const [showRiddleForm1, setShowRiddleForm1] = useState(false);
  const [showRiddleForm2, setShowRiddleForm2] = useState(false);
  const [showRiddleForm3, setShowRiddleForm3] = useState(false);
  const [showRiddleForm4, setShowRiddleForm4] = useState(false);

  const cards = ['ʕ•ᴥ•ʔ', '(｡•̀ᴗ-)✧', '｡◕‿‿◕｡', '( ˘▽˘)', '(☆ω☆)', '＾▽＾', '(✿◠‿◠)', 'Ò﹏Ó'];
  let cardValues = [...cards, ...cards];
  var firstCard, secondCard;
  var hasFlippedCard = false;
  var lockBoard = false;
  var matchedCards = 0; // New counter to track matched pairs
  const totalPairs = 8; // Total number of pairs


  function changeContent() {
    setButtonClickCount((prevCount) => {
      const newCount = prevCount + 1;
      
      if (newCount === 1) {
        setCurrentImage('/background2.png');
        setContent("What wears many rings but does not have any fingers? There your key will lie. Answer in all lowercase my friend, it is the key to victory");
        setShowRiddleForm1(true);
        setShowButton(false);
      }
  
      return newCount; // Correctly returning newCount here
    });
  }
  

  function checkInput1() {
    const userAnswer1 = document.querySelector('[name="riddle1"]').value
    if (userAnswer1 === realAnswer1) {
      setContent("The door opens and you see the Mad Hatter and the rabbit from earlier having a tea! The Mad Hatter asks you a riddle: What did Earl Grey say to the tea leaf? Don’t ______ me behind!");
      setCurrentImage('/background3.png');
      setShowRiddleForm1(false);
      setShowRiddleForm2(true);
    } else {
      setContent("Wrong, try again. What wears many rings but no fingers?");
    } 
    return;
  }

  function checkInput2() {
    const userAnswer2 = document.querySelector('[name="riddle2"]').value
    if (userAnswer2 === realAnswer2) {
      setContent("A hole opens up in the floor, taking you to a beautiful forest full of hearts. A disembodied voice asks you: Soldiers may be equal, but one stands above the rest. Which one?");
      setCurrentImage('/background4.png');
      setImageWidth(800);
      setShowRiddleForm2(false);
      setShowRiddleForm3(true);
      setShowButton(false);
    } else {
      setContent("Wrong, try again. What did Earl Grey say to the tea leaf when the tea? Don’t ______ me behind!");
    }
    return;
  }

  function checkInput3() {
    const userAnswer3 = document.querySelector('[name="riddle3"]').value
    if (userAnswer3 === realAnswer3 || userAnswer3 === realAnswer3Alt) {
      setContent("Okay seriously, where are all these riddles coming from? The voice says again: What is the most optimistic plant?");
      setCurrentImage('/background5.png');
      setImageWidth(800);
      setShowRiddleForm3(false);
      setShowRiddleForm4(true);
    } else {
      setContent("Wrong, try again. Soldiers may be equal, but one stands above the rest. Which one?");
    }
    return;
  }

  function checkInput4() {
    const userAnswer4 = document.querySelector('[name="riddle4"]').value
    if (userAnswer4 === realAnswer4) {
      
      
      
      startCards();
      
    } else {
      setContent("Wrong, try again. What is the most optimistic plant? (Hint: it tends to look on the bright side)");
    }

    
     // Duplicate cards for matching
     
     function startCards() {
       
       cardValues.sort(() => 0.5 - Math.random()); // Shuffle cards
       const matchGrid = document.getElementById('match-grid');
       matchGrid.innerHTML = ''; // Clear previous cards
     
       cardValues.forEach(value => {
         const card = document.createElement('div');
         card.classList.add('card');
         card.dataset.value = value;
         card.addEventListener('click', flipCard);
         matchGrid.appendChild(card);
       });

       checkGameCompletion();
     }
     
     function flipCard() {
       if (lockBoard) return;
       if (this === firstCard) return;
     
       this.classList.add('flipped');
       this.textContent = this.dataset.value; // Show card value
     
       if (!hasFlippedCard) {
         hasFlippedCard = true;
         firstCard = this;
         return;
       }
     
       secondCard = this;
       checkForMatch();
     }
     
     function checkForMatch() {
       const isMatch = firstCard.dataset.value === secondCard.dataset.value;
       isMatch ? disableCards() : unflipCards();
     }
     
     function disableCards() {
       firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
       matchedCards++; // Increase matched pair count
       resetBoard();
       checkIfFinished(); // Check if game is finished after a match
     }
     
     function unflipCards() {
       lockBoard = true;
       setTimeout(() => {
         firstCard.classList.remove('flipped');
         firstCard.textContent = ''; // Hide card value
         secondCard.classList.remove('flipped');
         secondCard.textContent = ''; // Hide card value
         resetBoard();
       }, 750);
     }
     
     function resetBoard() {
       [hasFlippedCard, lockBoard] = [false, false];
       [firstCard, secondCard] = [null, null];
     }
     
     // Function to check if all cards are matched
     function checkIfFinished() {
       if (matchedCards === totalPairs) {
         // All pairs are matched; continue with the next steps in the game
         setTimeout(() => {
           alert("Congratulations! You completed the memory game!");
           // Additional code to proceed after finishing
           // e.g., setContent("You completed the game, moving to the next level!");
         }, 500);
       }
     }
     
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
}


function checkGameCompletion() {
  const interval = setInterval(() => {
    if (matchedCards === totalPairs) {
      clearInterval(interval); // Stop checking once game is finished
      done();

      // Additional code to proceed to the next part of the game
      // e.g., setContent("You completed the game, moving to the next level!");
    }
  }, 500); // Check every 500ms
}
  function done(){
    setContent("Congratulations! You escaped!");
    setCurrentImage('/background6.png');
    setImageWidth(1000);
    setShowRiddleForm4(false);
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escape Room!</h1>
        <a>Alice in Wonderland</a>
      </header>

      <main>
        <br></br>
        <br></br>
        <img src={currentImage} 
        alt="First Background" 
        style={{ width: `${imageWidth}px`}}/>
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

        {showRiddleForm3 && (
          <form id="riddleForm3" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="riddle3" size="20" />
            <input type="button" value="Check" onClick={checkInput3} />
          </form>
        )}

        {showRiddleForm4 && (
          <form id="riddleForm4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="riddle4" size="20" />
            <input type="button" value="Check" onClick={checkInput4} />
          </form>
        )}

        {showButton && (
          <button onClick={changeContent}>Yes</button>
        )}

      <div id="match-grid" className="match-grid"></div>
        
      </main>
    </div>
  );
}

export default App;

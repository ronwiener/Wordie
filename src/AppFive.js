import React from "react";
import Header from "./components/Header";
import Tile from "./components/Tile";
import Keyboard from "./components/Keyboard";
import Buttons from "./components/Buttons";

import "./App.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class AppFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      board: [
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
      ],
      correctList: [],
      foundList: [],
      usedList: [],
      currentRow: 0,
      currentWord: "",
      currentGuess: "",
      errorMessage: "Can you guess the word?",
      gameOver: false,
    };
  }

  resetGame = () => {
    this.downloadDictionary();
    this.setState({
      words: [],
      board: [
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
        [
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
          { letter: "", status: "white" },
        ],
      ],
      correctList: [],
      foundList: [],
      usedList: [],
      currentRow: 0,
      currentWord: "",
      currentGuess: "",
      errorMessage: "Can you guess the word?",
      gameOver: false,
    });
  };

  componentDidMount = () => {
    this.downloadDictionary();
    this.resetGame();
  };

  async downloadDictionary() {
    let res = await fetch("5letterWords.txt");
    if (res.status !== 200) {
      throw new Error("Sorry Server not responding");
    }
    //read response stream as text
    let text_data = await res.text();
    let wordList = text_data.split("\n");
    let maxWords = wordList.length;
    let wordNumber = getRandomInt(0, maxWords);
    this.setState({
      words: wordList,
      currentWord: wordList[wordNumber].toUpperCase(),
    });
  }

  checkWord = (wordToCheck) => {
    let wordList = this.state.words;
    let word = wordToCheck.toString().toLowerCase();
    if (wordList.includes(word)) {
      return true;
    } else {
      this.setState({
        errorMessage: "That word is not in my dictionary. Try again.",
      });
    }
  };

  foundAll = (wordSubmitted, letterToCheck, i) => {
    //count the occurrences of each letter in the word submitted
    let wordArray = wordSubmitted.split("");
    const counts = {};

    for (const num of wordArray) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    //count the occurrences of each letter in the target word
    let actualWordArray = this.state.currentWord.split("");
    let countsActual = {};
    for (const num of actualWordArray) {
      countsActual[num] = countsActual[num] ? countsActual[num] + 1 : 1;
    }

    //check if the currentLetter is in the right spot, and if there are still more to find
    let foundCounter = 0;
    let foundIt = false;
    for (let i = 0; i < 5; i++) {
      if (
        wordSubmitted[i] === this.state.currentWord[i] &&
        wordSubmitted[i] === letterToCheck
      ) {
        foundIt = true;
        foundCounter++;
      }
      console.log(wordSubmitted[i] === letterToCheck);
      /* console.log(foundIt, foundCounter);
      console.log(foundIt, foundCounter);
      console.log(wordSubmitted[i]);
      console.log(letterToCheck);  */
      if (foundIt) {
        // console.log(countsActual[letterToCheck]);
        if (countsActual[letterToCheck] <= foundCounter) {
          return true;
        }
      }
      foundIt = false;
    }
    return false;
  };

  submitWord = (wordSubmitted) => {
    wordSubmitted = wordSubmitted.toUpperCase();
    let guessBox = document.getElementById("guessWordBox");
    if (!this.state.gameOver) {
      if (this.checkWord(wordSubmitted)) {
        let currentBoard = [...this.state.board];
        let currentWord = this.state.currentWord;
        let boardRow = this.state.currentRow;
        let errorMessage = this.state.errorMessage;
        let tileColor = "white";
        let foundList = this.state.foundList;
        let usedList = this.state.usedList;
        let correctList = this.state.correctList;
        let newRow = [];

        for (let i = 0; i < wordSubmitted.length; i++) {
          usedList.push(wordSubmitted[i]);

          if (currentWord.includes(wordSubmitted[i])) {
            foundList.push(wordSubmitted[i]);
            console.log(usedList);
            console.log(foundList);
            //if the letter is in the correct space this will light green and put the letter in the correctList
            if (currentWord[i] === wordSubmitted[i]) {
              tileColor = "lightgreen";
              correctList.push(wordSubmitted[i]);
              console.log(correctList);
            } else {
              if (this.foundAll(wordSubmitted, wordSubmitted[i], i)) {
                tileColor = "white";
              } else tileColor = "lightblue";
              console.log(wordSubmitted);
              console.log(wordSubmitted[i]);
            }
          }
          newRow[i] = {
            letter: wordSubmitted[i],
            status: tileColor,
          };
          tileColor = "white";
        }

        currentBoard[boardRow] = newRow;
        boardRow++;
        let gameOver = false;
        if (boardRow > 5) {
          gameOver = true;
          errorMessage =
            "Sorry, but the word was " + currentWord + ". Play again!";
        }
        if (wordSubmitted === currentWord) {
          errorMessage = "You WIN!";
          gameOver = true;
        }

        this.setState({
          board: currentBoard,
          currentRow: boardRow,
          gameOver: gameOver,
          errorMessage: errorMessage,
          usedList: usedList,
          foundList: foundList,
          correctList: correctList,
        });
      }
      guessBox.value = "";
    }
  };

  handleInputBoxChange = (event) => {
    this.setState({
      errorMessage: String.fromCharCode(160),
    });
    event.target.value = event.target.value.toUpperCase();
    if (event.key === "Enter") {
      this.keyboardType("Enter");
    }
  };

  keyboardType = (keyClicked) => {
    this.setState({
      errorMessage: String.fromCharCode(160),
    });
    let errorMessage = String.fromCharCode(160);
    let currentGuess = "";
    let gameOver = this.state.gameOver;
    let guessBox = document.getElementById("guessWordBox");
    if (guessBox && !gameOver) {
      if (keyClicked === "Enter" && guessBox.value.length >= 5) {
        this.submitWord(guessBox.value);
      } else {
        if (guessBox.value.length <= 5) {
          if (keyClicked === "←") {
            guessBox.value = guessBox.value.substring(
              0,
              guessBox.value.length - 1
            );
            currentGuess = guessBox.value;
          } else if (keyClicked !== "Enter") {
            guessBox.value += keyClicked.toUpperCase();
          }

          currentGuess = guessBox.value;
        } else {
          errorMessage = "We're only looking for 5-digit words";
          currentGuess = "";
          guessBox.value = "";
          this.setState({
            errorMessage: errorMessage,
          });
        }
      }
    }

    this.setState({
      currentGuess: currentGuess,
    });
  };

  render() {
    console.log(this.state.currentWord);
    return (
      <div className="App">
        <header className="Header">
          <Header errorMessage={this.state.errorMessage} />
          <div style={{ width: "180px" }}>
            {this.state.board.map((board, idx) => {
              return (
                <div key={idx}>
                  {board.map((row, idx) => {
                    return (
                      <div key={idx}>
                        <Tile
                          letter={row.letter}
                          color={row.status}
                          key={idx}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <input
            autoFocus
            style={{ textTransform: "uppercase" }}
            type="text"
            id="guessWordBox"
            defaultValue={this.state.currentGuess}
            maxLength="5"
            className="inputBox"
            onKeyDown={this.handleInputBoxChange}
          />
          <Keyboard
            keyboardType={this.keyboardType}
            usedList={this.state.usedList}
            foundList={this.state.foundList}
            correctList={this.state.correctList}
          />

          <Buttons resetGame={this.resetGame} />
        </header>
      </div>
    );
  }
}

export default AppFive;

import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import data from "../../data.json";

//FIXME: // See activity 29-Stu_FriendRefactor/Solved

class Game extends Component {
  state = {
    data: data,
    score: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  handleCorrectGuess = newData => {
    //Add to the sore for a corrct guess
    let newScore = this.state.score + 1;

    console.log("newData in handleCorrectGuess is: " + newData);
    this.setState({ data: newData, score: newScore });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} />
        <Container>
          <Header />
          <ClickItem />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Game;

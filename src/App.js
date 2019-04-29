import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Friends from "./Friends.json";

const FriendCards = Friends;

class App extends Component {
  state = {
    Friends,
    Score: 0,
    HighScore: 10,
    ImageClicked: [],
    Message: ""
  };


/////SHUFFLE CARDS/////
////used a shuffle JS method found online
    shuffle = FriendCards => {
      for (let i = FriendCards.length -1; i > 0; i--) {
        let a = Math.floor(Math.random() * (i + 1));
        let b = FriendCards[i];
          FriendCards[i] = FriendCards[a];
          FriendCards[a] = b;
      }

      return FriendCards
      };

/////FriendCard click function/////
  clickCard = id => {
    this.setState({
      Friends: this.shuffle(FriendCards)
    });

  /////When cards are clicked on/////

  /////////clicked twice////////
  if (this.state.ImageClicked.includes(id)){
    this.setState({
      Score: 0,
      ImageClicked: [],
      Message: "Wrong!"
    });
  } else{
  ////////correct anwser///////
    this.setState({
      Score: this.state.Score + 1,
      HighScore: this.state.HighScore +1,
      ImageClicked: this.state.ImageClicked.concat(id),
      Message: "Correct!"
     }, () => {
        if (this.state.Score === 10) {
           this.setState({
             Message: "You Win Game!"
             });
            }
      });
//////////reset the high score//////////
      if (this.state.Score < this.state.HighScore) {
          this.setState({
            HighScore: this.state.HighScore
           });
          }     
    }
}

////RENDER/////
  render() {
    return (
      <Wrapper>
        <Header>
          <h1>Friends Memory Game</h1>
          <h3>Click on an image, but don't click on the same image twice!</h3>
          <div className= "scores">
          <p className= "text-left">Score: { this.state.Score }</p>
          <p className= "text-right">High Score: { this.state.HighScore }</p>
          <p>{ this.state.Message }</p>
          </div>
        </Header>
        {this.state.Friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clickCard={this.clickCard}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

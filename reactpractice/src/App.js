import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Friends from "./Friends.json";

const FriendCard = Friends;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Friends,
    Score: 0,
    HighScore: 0,
    ImageClicked: [],
    Message: ""
  };


/////SHUFFLE CARDS/////
////used a shuffle JS method found online
    shuffle = FriendCard => {
      for (let i = FriendCard.lenght -1; i > 0; i--) {
        let a = Math.floor(Math.random() * (i + 1));
        let b = FriendCard[i];
          FriendCard[i] = FriendCard[a];
          FriendCard[a] = b;
      }

      return FriendCard
      };

/////FriendCard click function/////
  click = id => {
    this.setState({
      Friends: this.shuffle(FriendCard)
    });

  /////When cards are clicked on/////
    this.setState({
       Score: this.state.Score + 1,
       HighScore: this.state.HighScore +1,
       ImageClicked: this.state.ImageClicked.concat(id),
       Message: "Guess is correct!"
      }, () => {
         if (this.state.Score === 10) {
            this.setState({
              Message: "You Win Game!"
              });
            }
      });
////reset the high score/////
          if (this.state.Score < this.state.HighScore) {
             this.setState({
                HighScore: this.state.HighScore
              });
            }     
    }
}

////RENDER/////
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>
          <h1>My Friends</h1>
          <div class= "scores">
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
            click={friend.click}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;
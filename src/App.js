import React, { Component } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Container from './Layouts/Container';
import Column from './Layouts/Column';
import figures from './figures.json';
import Row from './Layouts/Row';
import './App.css';
import './normalize.css';


function shuffleFigs(array) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    figures,
    currentScore: 0,
    topScore: 0,
    rightWrong: '',
    clicked:[],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)});
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: '',
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore});
  } else if (newScore === 18) {
    this.setState({rightWrong: "Winner!"});
  }
  this.handleShuffle();
};

handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore:this.state.topScore,
    rightWrong: 'Try again!',
    clicked:[],
  });
  this.handleShuffle();
};

handleShuffle = ()=> {
  let shuffledFigs = shuffleFigs(figures);
  this.setState({ figures: shuffledFigs});
};

render() {
  return (
    <Wrapper>
      <Navbar
      title='Clicky! underwater style'
      rightWrong={this.state.rightWrong}
      score={this.state.currentScore}
      topScore={this.state.topScore}
      
      />

      <Title>
        Don't click on the same picture twice, good luck!
      </Title>
      <Container>
        <Row>
          {this.state.figures.map(figures => (
            <Column size="md-2 sm-8">
              <Card
                key={figures.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={figures.id}
                image={figures.image}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}
}
export default App;
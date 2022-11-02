import React from 'react'
import Counter from './components/Counter'
import GameOver from './components/GameOver'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isGameOver: false}
  }

  finishGame = () => {
    this.setState({isGameOver: true})
  }

  render() {
    let component;
    if (this.state.isGameOver) {
      component = <GameOver />
    } else {
      component = <Counter finishGame={this.finishGame} />
    }

    return (
      <div style={{textAlign: 'center', marginTop: '30px'}}>
        {component}
      </div>
    )
  }
}

export default App;
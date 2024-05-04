import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {generate: 0}

  generateBtn = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({generate: randomNum})
  }

  render() {
    const {generate} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.generateBtn}
          >
            Generate
          </button>
          <p className="random-value">{generate}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

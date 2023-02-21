import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      console.log(prevState.speed)
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return {speed: 200}
    })
  }

  onBreak = () => {
    this.setState(prevState => {
      console.log(prevState.speed)
      if (prevState.speed <= 0) {
        return {speed: 0}
      }

      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="bg-heading">SPEEDOMETER</h1>
        <img
          className="bg-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <div className="speed-container">
          <h1 className="speed-heading">Speed is {speed}mph </h1>
          <p className="speed-description">
            Min limit is 0mph, Max limit is 200mph
          </p>

          <button
            className="accelerate-button"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="break-button" type="button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

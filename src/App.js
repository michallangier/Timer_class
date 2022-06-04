import { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = { time: {}, seconds: 0 }
    this.startTimer = this.startTimer.bind(this)
    this.countUp = this.countUp.bind(this)
  }

  secondsToTime(secs) {
    let seconds = secs
    let obj = {
      "s": seconds
      // ...
    }
    return obj
  }

  componentDidMount() {
    let timeLV = this.secondsToTime(this.state.seconds)
    this.setState({ time: timeLV })
    this.startTimer()
  }

  startTimer() {
    this.timer = setInterval(this.countUp, 1000)

  }

  countUp() {
    let seconds = this.state.seconds + 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    })
  }

  render() {

    return (
      <div>
        Seconds from app start: {this.state.time.s} [s]
      </div>
    )
  }

}

export default App;

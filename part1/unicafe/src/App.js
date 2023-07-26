import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  if (props.isPercentage) {
    return (
      <>
        <td>{props.text}</td>
        <td>{props.value}%</td>
      </>
    )
  }
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = (props) => {
  const average = () => {
    return (props.good - props.bad) / props.total;
  }

  const positive = () => {
    return (100 / props.total) * props.good;
  }
  if (isNaN(average()) || isNaN(positive())) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tr><StatisticLine text='good' value={props.good} /></tr>
        <tr><StatisticLine text='neutral' value={props.neutral} /></tr>
        <tr><StatisticLine text='bad' value={props.bad} /></tr>
        <tr><StatisticLine text='all' value={props.total} /></tr>
        <tr><StatisticLine text='average' value={average()} /></tr>
        <tr><StatisticLine text='positive' value={positive()} isPercentage={true} /></tr>
      </table>
    </div>
  )
}

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad;

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={increaseGood}
        text='good'
      />
      <Button
        handleClick={increaseNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseBad}
        text='bad'
      />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />

    </div>
  )
}

export default App;

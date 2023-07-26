import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const MaxVotedAnecdote = (props) => {
  var result = props.points.indexOf(Math.max(...props.points));
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[result]}<br />
      <p>has {props.points[result]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)
  const handleClick = () => {
    if (selected > 6) {
      setSelected(0)
      return
    }
    setSelected(selected + 1)
  }
  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleClick} text='next anecdote' />
      <MaxVotedAnecdote anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App
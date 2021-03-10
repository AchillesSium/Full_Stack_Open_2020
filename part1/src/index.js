import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (coursename) => {
  return (
    <div>
      <h1>
        {coursename.course}
      </h1>
    </div>
  )
}

const Content = (content) => {
  const part1 = content.parts[0]
  const part2 = content.parts[1]
  const part3 = content.parts[2]
  return (
    <div>
      <p>
        <Part part={part1.name} exrcises={part1.exercises} />
      </p>
      <p>
        <Part part={part2.name} exrcises={part2.exercises} />
      </p>
      <p>
        <Part part={part3.name} exrcises={part3.exercises} />
      </p>
    </div>
  )
}

const Part = (content_part) => {
  return (
    <div>
      <p>
        {content_part.part} {content_part.exrcises}
      </p>
    </div>
  )
}

const Total = (total) => {
  const number = total.parts.reduce((total,currentvalue) => total = total+currentvalue.exercises,0);
  return (
    <div>
      <p>
        Number of exercises = {number}
      </p>
    </div>
  )
}

const Hello = (obj) => {
  const { name, age } = obj.props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const propps = {
    name: 'Arto Hellas',
    age: 35,
  }

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Hello props={propps} />
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />   
      <br/>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

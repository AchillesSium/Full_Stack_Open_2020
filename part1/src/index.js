import React from 'react'
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
  return (
    <div>
      <p>
        {content.part1} {content.exrcises1}
      </p>
      <p>
        {content.part2} {content.exercises2}
      </p>
      <p>
        {content.part3} {content.exercises3}
      </p>
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>
        Number of exercises = {total.number}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
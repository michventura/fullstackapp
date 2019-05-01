import React from 'react'
import styled, {css} from 'styled-components'
//import NavBar from '../NavBar/NavBar'
import Diagram from '../../assets/diagram.svg'

const Container = styled.div`
  text-align: center;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid blue;
  color: blue;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

const Home = () => {
  return (
    <Container>
      {/* <NavBar /> */}
      <h1>Product Development Done Right!</h1>
      <h2>Team management tool for produt developers</h2>
      <Button>Start here</Button>
      <p>
        Log your product development process and share it across your team to
        keep everyone up to date.
      </p>
      <img src={Diagram} alt="Process Development" />
      <p>Create and assign tasks to track and improve team collaboration.</p>
      <Button>Start Now!</Button>
    </Container>
  )
}

export default Home

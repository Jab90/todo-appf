import React from 'react'
import Container from '../components/container/Container'
import Header from '../components/header/Header'
import Addtodo from '../components/add_todo/addtodo'

export default function Home() { 
  return (
    <Container>
      <Header/>
      <Addtodo/>
    </Container>

  )
  
}
import React from 'react'
import Container from '../components/container/Container'
import Header from '../components/header/Header'
import Addtodo from '../components/add_todo/addtodo'
import ListTodo from '../components/list_todo/ListTodo'
import Footer from '../components/footer/Footer'

export default function Home() { 
  return (
    <Container>
      <Header/>
      <Addtodo/>
      <ListTodo/>
      <Footer/>
    </Container>

  )
  
}
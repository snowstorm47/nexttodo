import { Container } from '@mui/material'
import type { NextPage } from 'next'
import TodoList from '../components/todolist'
import Todoform from '../components/todoForm'
const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
    <TodoList/>
    <Todoform/>
    </Container>
  )
}

export default Home

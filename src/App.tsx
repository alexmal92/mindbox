import { Container, Box, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { Filter } from './components/Filter';
import { TodoList } from './components/TodoList';
import { stateTodos } from './state/stateTodos';

const App = () => {
  const [state, setState] = useState(stateTodos)
  const [todos, setTodos] = useState(state)
  const [todoSearch, setTodoSearch] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    setTodos(state)
    setFilter('All')
  }, [state])

  const addTodo = () => {
    setState([...state, { id: v4(), name: todoSearch, success: false }])
    setTodoSearch('')
  }

  return (
    <Container disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'stretch', sm: 'center' }, height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', sm: 'flex-start' }, bgcolor: 'lightseagreen', borderRadius: { xs: 'none', sm: 5 }, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <TextField value={todoSearch} onChange={e => setTodoSearch(e.target.value)} type='text' variant='standard' label='Todo' inputProps={{ maxLength: 20 }}/>
          <Button disabled={!todoSearch} onClick={addTodo} variant='text' size='small' sx={{ whiteSpace: 'nowrap' }}>Add todo</Button>
        </Box>
        <TodoList state={state} todos={todos} setState={setState} />
        <Filter state={state} setTodos={setTodos} setState={setState} filter={filter} setFilter={setFilter} />
      </Box>
    </Container>
  );
}

export { App };

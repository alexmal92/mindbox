import { useEffect, useMemo } from 'react'
import { Box, Typography, Button, ButtonGroup } from '@mui/material';
import { Todo } from '../types/types'
import { v4 } from 'uuid';

const Filter = (props: IProps) => {

  const { state, filter, setTodos, setState, setFilter } = props

  const countUnSuccess = useMemo(() => state.filter(todo => !todo.success).length, [state])

  const clearCompleted = () => {
    setState(state.filter(todo => todo.success === false))
  }

  useEffect(() => {
    filter === 'All' && setTodos([...state])
    filter === 'Active' && setTodos(state.filter(todo => todo.success === false))
    filter === 'Completed' && setTodos(state.filter(todo => todo.success === true))
  }, [filter])


  const handleChange = (input: string) => () => {
    setFilter(input)
  }


  return (
    <Box display='flex' sx={{ alignItems: 'center', justifyContent: {xs: 'center', sm: 'flex-start'}, flexDirection: {xs: 'column', sm: 'row'} }}>
      <Typography sx={{ p: 1 }}>{countUnSuccess ? countUnSuccess + ' items left' : 'all completed'}</Typography>
      <ButtonGroup disableElevation size='small' sx={{ p: 1 }}>
        {['All', 'Active', 'Completed'].map(input =>
          <Button key={v4()} value={input} disabled={state.length === 0} onClick={handleChange(input)} variant={input === filter ? 'contained' : 'outlined'}>{input}</Button>
        )}
      </ButtonGroup>
      <Button onClick={clearCompleted} size='small'>Clear completed</Button>
    </Box>
  )
}

export { Filter }

interface IProps {
  state: Todo[]
  filter: string
  setState: (state: Todo[]) => void
  setTodos: (todos: Todo[]) => void
  setFilter: (filter: string) => void
}


import { Todo } from '../types/types'
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
const TodoList = (props: IProps) => {

  const { todos, state, setState } = props

  const isSuccess = (currentId: string) => () => {
    setState(state.map(todo => todo.id === currentId ? { ...todo, success: !todo.success } : todo))
  }

  const deleteTodo = (id: string) => () => {
    setState(state.filter(todo => todo.id !== id))
  }

  return (
    <List sx={{ flexGrow: { xs: 1 } }}>
      {todos && todos.map(todo =>
        <ListItem key={todo.id} secondaryAction={
          <IconButton edge="end" onClick={deleteTodo(todo.id)}>
            <DoNotDisturbIcon />
          </IconButton>
        } disablePadding>
          <ListItemButton onClick={isSuccess(todo.id)} >
            <ListItemIcon>
              <Checkbox value={todo.id} checked={todo.success} disableRipple />
            </ListItemIcon>
            <ListItemText primary={todo.name} sx={{ textDecorationLine: todo.success ? 'line-through' : 'none' }} />
          </ListItemButton>
        </ListItem>
      )}
    </List>
  )
}

export { TodoList }

interface IProps {
  state: Todo[]
  todos: Todo[]
  setState: (state: Todo[]) => void
}
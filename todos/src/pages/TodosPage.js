import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import TodoItem from '../components/TodoItem';

const TodosPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Projekt NTP',
      checked: false,
    },
    {
      id: 2,
      title: 'Prezentacja',
      checked: true
    }
  ])

  const handleChange = useCallback((id) => () => {
      const todoId = todos.findIndex(el=>el.id===id);

      if(!todoId && todoId<0) return;
      const updatedTodos = [...todos];
      updatedTodos[todoId].checked = !updatedTodos[todoId].checked;
      setTodos(updatedTodos);
  }, []);

  return (
    <>
      <Typography variant="h1" align="center">Todos</Typography>
      <Grid container justify="center">
        <Grid item xs={4}>
          <List component="nav"  aria-label="mailbox folders">
            {todos.map(todo => (
              <>
                <ListItem key={todo.id} button>
                  <TodoItem title={todo.title} checked={todo.checked} onChange={handleChange(todo.id)} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Grid>
      </Grid>
    
      <Grid container justify="center">
        <Grid item>
          <Link to="/todos/summary">
            <Button variant="contained">Zobacz podsumowanie</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default TodosPage;
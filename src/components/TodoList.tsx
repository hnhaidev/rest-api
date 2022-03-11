import axios from 'axios';
import { useEffect, useState } from 'react';
import url from '../url';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled('div')`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled('h2')`
  font-size: 20px;
`;

const Item = styled('div')`
  margin-top: 10px;
`;

const ItemTitle = styled(Link)`
  text-decoration: none;
  font-size: 16px;
`;

const ItemBody = styled('p')`
  color: #000;
  font-size: 12px;
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getData = () => {
    axios.get(url('/posts')).then((response) => setTodos(response.data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Title>TodoList</Title>
      {todos
        .sort((a: { id: number }, b: { id: number }) => b.id - a.id)
        .map((todo: { id: string; title: string; body: string }) => (
          <Item key={todo.id}>
            <ItemTitle to={`/todo/${todo.id}`}>{todo.title}</ItemTitle>
            <ItemBody>{todo.body}</ItemBody>
          </Item>
        ))}
    </Container>
  );
};

export default TodoList;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import url from '../url';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Todo = () => {
  const [todo, setTodo] = useState<{ id: any; title: string; body: string }>({
    id: '',
    title: '',
    body: '',
  });

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = pathname.slice(6);
    axios.get(url(`/posts/${id}`)).then((response) => setTodo(response.data));
  }, [pathname]);

  const onDelete = () => {
    const id = pathname.slice(6);
    axios.delete(url(`/posts/${id}`)).then((response) => navigate('/'));
  };
  return (
    <Container>
      <Event>
        <Edit to={`/todo/edit/${todo.id}`}>Edit</Edit>
        <Delete onClick={onDelete}>Delete</Delete>
      </Event>
      <Item>
        <ItemTitle>{todo.title}</ItemTitle>
        <ItemBody>{todo.body}</ItemBody>
      </Item>
    </Container>
  );
};

const Container = styled('div')`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Event = styled('div')`
  display: flex;
  gap: 20px;
`;

const Edit = styled(Link)`
  color: blue;
  text-decoration: none;
  font-size: 16px;
  padding: 7px 16px;
  background-color: #eee;
`;

const Delete = styled('button')`
  border: none;
  color: red;
  cursor: pointer;
  font-size: 16px;
  padding: 7px 16px;
`;

const Item = styled('div')`
  margin-top: 10px;
`;

const ItemTitle = styled('h4')`
  text-decoration: none;
  font-size: 16px;
`;

const ItemBody = styled('p')`
  color: #000;
  font-size: 12px;
`;

export default Todo;

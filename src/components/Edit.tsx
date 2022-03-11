import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import url from '../url';

const Edit = () => {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const [todo, setTodo] = useState({ title: '', body: '' });

  useEffect(() => {
    const id = pathname.slice(11);

    axios
      .get(url(`/posts/${id}`))
      .then((response) => setTodo({ title: response.data.title, body: response.data.body }));
  }, [pathname]);

  const onChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const id = pathname.slice(11);
    const { title, body } = todo;
    axios
      .patch(url(`/posts/${id}`), { title: title, body: body })
      .then(() => setTodo({ title: '', body: '' }))
      .then((response) => navigate('/'));
  };

  return (
    <Container>
      <Title>AddTodo</Title>
      <Form onSubmit={onSubmit}>
        <Lable>Title:</Lable>
        <Input
          value={todo.title}
          type="text"
          name="title"
          onChange={onChange}
          required
          placeholder="Add Todo"
        />

        <Lable>Body:</Lable>
        <Input
          value={todo.body}
          type="text"
          name="body"
          onChange={onChange}
          required
          placeholder="Add Body"
        />

        <Button type="submit">Add Todo</Button>
      </Form>
    </Container>
  );
};

const Container = styled('div')`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled('h2')`
  font-size: 20px;
`;

const Form = styled('form')`
  margin-top: 10px;
`;

const Lable = styled('label')`
  font-size: 16px;
`;

const Input = styled('input')`
  margin-top: 10px;
  width: 100%;
  padding: 7px 18px;
`;

const Button = styled('button')`
  margin-top: 10px;
  padding: 10px 20px;
  color: #fff;
  background-color: blue;
  border: none;
  cursor: pointer;
`;

export default Edit;

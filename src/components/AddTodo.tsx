import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import url from '../url';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  let navigate = useNavigate();
  const [todo, setTodo] = useState({ title: '', body: '' });

  const onChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(url('/posts'), { title: todo.title, body: todo.body })
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

export default AddTodo;

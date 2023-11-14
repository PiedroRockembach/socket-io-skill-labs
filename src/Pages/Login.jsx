import React, { useContext, useEffect, useState } from "react";
import context from "../context/context";
import { CardHeader, Form, Button} from "react-bootstrap";
import authenticate from "../services/GoogleProvider";
const Login = () => {
  const {user, toggleUser, toggleLogged } = useContext(context)
  const [email, setEmail] = useState('')

  const log = (e) => {
    e.preventDefault();
    toggleUser(email);
    console.log(email);
    
  }
  const handleEmail = ({ target }) => {
    setEmail(target.value)
  }

  const getLogin = async () => {
    const { user } = await authenticate();
    if(user) {
      localStorage.setItem('user', JSON.stringify(user))
      await toggleUser(user)
      toggleLogged(true);
    }
    
  }
  return(
    <section className="login-page">
    {/*
    <CardHeader className="header-login">
      Login
    </CardHeader>
    <Form className="form-login" onSubmit={log}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email"
        placeholder="Enter Email"
        onChange={ handleEmail}
        />
        <Form.Text className="text-muted">
          Não enviaremos anuncios promocionais ao seu email
        </Form.Text>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="senha"/>
        <Form.Text className="text-muted">
        </Form.Text>
      
      </Form.Group>
      <Button variant="primary" type="submit" >
        Enviar
      </Button>
    </Form>
  */}
    <Button variant="danger" className="google-button" onClick={ getLogin }>
        Login com Google
    </Button>
    </section>
  );
}

export default Login;
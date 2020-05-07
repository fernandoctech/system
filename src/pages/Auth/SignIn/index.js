import React from 'react';
import { Container, SignForm, Logo } from '../styles';
import Button from '../../../styles/components/Button';
const SignIn = () => (
    
    <Container>
        
        <SignForm onSubmit={()=> {}}>
        <Logo><img src="https://i.ibb.co/hs6MWxD/UP-Facebook-post-1000x1000px-Logo-1.jpg"></img></Logo>
            <h1></h1>
            <span>E-mail</span>
            <input type="email" name="email"/>

            <span>Senha</span>
            <input type="password" name="password"/>

            <Button size ="default" type="submit" color="nando">Entrar</Button>

        </SignForm>
    </Container>
);

export default SignIn;
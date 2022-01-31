import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
    background-size: cover;
    background-image: url('/images/space2.png');
    background-repeat: repeat;
    height: 100vh;
    overflow: auto;

h1 {
    color: white;
}

`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;

input {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    border-radius: 10px;
    margin: 0px 0px 15px;
}
`

const ContainerButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
  border-radius: 30px;
  border-color: transparent;
  background-color: #020004;
  color: white;
  font-size: 18px;
  padding: 7px;
  margin: 10px;

  :hover {
    background-color: #fff;
    color: black;
  }
`

export const LoginPage = () =>{

    const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

    const history = useHistory()
    
    const goToHomePage = () => {
        history.push("/")
    }


    const onSubmitLogin = (event) => {
        event.preventDefault();

        cleanFields();

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/celio-junior/login
        `, {
            ...form
        }).then(({ data }) => {
            localStorage.setItem("token", data.token);
            history.push("/admin");
        }).catch(res => console.log(res));
    }

    return (
        
        <Container>
            <h1>Login</h1>

            <InputContainer>          
                <form onSubmit={ onSubmitLogin } >
                    <input
                        name="email"
                        value={form.email} 
                        onChange={onChange}
                        placeholder={"E-mail"}
                        title="Informe um formato de e-mail válido"
                        required
                        type={"email"}
                    />
                    <input
                        name="password"
                        value={form.password} 
                        onChange={onChange}
                        placeholder={"Senha"}
                        required
                        pattern={"^.{3,}"}
                        title="Sua senha deve ter no mínimo 3 caracteres"
                        type={"password"}
                    />
                   
                <ContainerButton>
                   <Button>Entrar</Button>
                   <Button onClick={ goToHomePage }>Voltar</Button>
                </ContainerButton>
                
                </form>
            </InputContainer>

            
                    
            


        </Container>
        
    );
};
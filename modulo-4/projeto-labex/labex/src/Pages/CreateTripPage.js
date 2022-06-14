import React from "react";
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
    background-image: url('/images/space3.png');
    background-repeat: repeat;
    height: 100vh;

h1 {
    padding-bottom: 10px;
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
    width: 500px;
    height: 30px;
    margin-top: 10px;
    border-radius: 10px;
    margin: 0px 0px 15px;
}

select {
    width: 508.5px;
    height: 35px;
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

export const CreateTripPage = () =>{

    const { form, onChange, cleanFields } = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})

    const history = useHistory()
    
    const AdminHomePage = () => {
        history.push("/admin")
    }

    const onSubmitCreateTrip = (event) => {
        event.preventDefault();

        cleanFields();

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/celio-junior/trips
        `, {
            ...form
        }, {
            headers: {
                Auth: localStorage.getItem("token")
            }
        }).then(alert("Viagem criada com sucesso!")
        ).catch(err => console.log(err))
    }


    return (
        
        <Container>
            <h1>Criar Viagem</h1>

            <InputContainer>          
                <form onSubmit={onSubmitCreateTrip}>

                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder={"Nome"}
                        required
                        type={"text"}
                    />

                    <select 
                        id="planet"
                        name="planet"
                        value={form.planet}
                        onChange={onChange}
                        >
                        <option value="" disabled selected>Escolha um planeta</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                        <option value="Plutão">Plutão</option>
                    </select>

                    <input
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        placeholder={"dd/mm/aaaa"}
                        type={"date"}
                    />
                    <input
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        placeholder={"Descrição"}
                        type={"text"}
                    />
                    <input
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        placeholder={"Duração em dias"}
                        type={"text"}
                    />
                    
                    <ContainerButton>
                        <Button type="submite">Enviar</Button>
                        <Button onClick={ AdminHomePage }>Voltar</Button>
                    </ContainerButton>
                </form>
            </InputContainer>
        </Container>
        
    );
};
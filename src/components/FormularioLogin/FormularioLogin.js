import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";
import { useState } from "react";

const FormularioLogin = (props) => {

  const [nome, setNome] = useState("")
  const [profile, setProfile] = useState("")
 
  const onChangeNome = (event) =>{
    setNome(event.target.value)
  }

  const onChangeProfile = (event) =>{
    setProfile(event.target.value)
  }
  

  const login = () =>{
    props.setPageFlow(2);
    props.setUsuario({nome:nome, profile:profile})
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} 
          onChange={onChangeNome}
          value={nome}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} 
          onChange={onChangeProfile}
          value={profile}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

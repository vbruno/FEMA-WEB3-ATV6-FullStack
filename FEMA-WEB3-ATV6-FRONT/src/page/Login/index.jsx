import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Background } from "./styles";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos");
    }

    const dataUser = {
      email,
      password,
    };

    console.log(dataUser);
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <InputText
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          placeholder="password"
          icon={FiLock}
          isPassword
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={"Entrar"} onClick={handleSignIn} />

        <button>Criar conta</button>
      </Form>

      <Background />
    </Container>
  );
}

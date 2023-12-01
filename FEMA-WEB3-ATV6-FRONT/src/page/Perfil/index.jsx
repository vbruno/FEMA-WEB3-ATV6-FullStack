import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Perfil() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const avatarUrl = avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile(e) {
    e.preventDefault();

    const updated = {
      name,
      email,
      password: newPassword,
      oldPassword,
    };

    const userUpdated = Object.assign(updated);

    console.log({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button>
          <FiArrowLeft />
          <span>Voltar</span>
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <InputText
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          placeholder="Senha atual"
          isPassword
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <InputText
          placeholder="Nova senha"
          isPassword
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title={"Salvar"} onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Avatar } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imgPreview = URL.createObjectURL(file)
    setAvatar(imgPreview)
  }

  return (
    <Container>
      <header>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft size={24} />
        </button>
      </header>
      <Form>

        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <Input id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />

        <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setPasswordOld(e.target.value)} />

        <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={e => setPasswordNew(e.target.value)} />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
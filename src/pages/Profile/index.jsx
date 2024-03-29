import { Container, Form, Avatar } from "./styles"
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>
      <Form>

        <Avatar>
          <img src="https://github.com/Zac597.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera/>
        <Input id="avatar" type="file"/>

          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser}/>

        <Input placeholder="E-mail" type="text" icon={FiMail}/>

        <Input placeholder="Senha atual" type="password" icon={FiLock}/>

        <Input placeholder="Nova senha" type="password" icon={FiLock}/>

        <Button name="Salvar"/>
      </Form>
    </Container>
  )
}
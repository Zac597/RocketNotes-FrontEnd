import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'
import { Container, Profile, Logout } from './styles'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt={user.name} />
        <div>
          <span>Bem-Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}
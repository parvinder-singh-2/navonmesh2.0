import React from 'react'
import { Container, Logo, LogoutBtn } from '..'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: Home,
      slug:  '/',
    },
    {
      name: Online-Services,
      slug: '/online-services',
    },
    {
      name: Login,
      slug: '/login',
    },
    {
      name: Register,
      slug: '/register',
    }
  ]
  return (
    <div>header</div>
  )
}

export default Header
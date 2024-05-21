'use client'

import React from 'react'

import { logout } from '../_providers/authUser/AuthUserActions'
import { useAuthUser } from '../_providers/authUser/AuthUserProvider'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { dispatch } = useAuthUser()
  const router = useRouter()

  const handleLogout = async () => {
    const res = await logout(dispatch)
    if (res.success) {
      router.push('/')
    }
  }

  return (
    <div style={{ color: 'black' }}>
      Página principal
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

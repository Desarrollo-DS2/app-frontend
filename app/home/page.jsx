'use client'

import React from 'react'

import { logout } from '../_providers/authUser/AuthUserActions'
import { useAuthUser } from '../_providers/authUser/AuthUserProvider'

export default function LoginPage() {
  const { dispatch } = useAuthUser()

  return (
    <div style={{ color: 'black' }}>
      Main page
      <button
        onClick={() => {
          logout(dispatch)
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  )
}

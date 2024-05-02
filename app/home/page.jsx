'use client'

import React from 'react'

import { logout } from '../_providers/authUser/AuthUserActions'
import { useAuthUser } from '../_providers/authUser/AuthUserProvider'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { dispatch } = useAuthUser()
  const router = useRouter()

  return (
    <div style={{ color: 'black' }}>
      Main page
      <button
        onClick={ async () => {
          const res = await logout(dispatch)
          if (res.success) {
            router.push('/')
          }
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  )
}

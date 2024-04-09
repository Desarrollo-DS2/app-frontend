'use client'

// This is a example of how to use the providers

import { AuthUserProvider } from './authUser/AuthUserProvider'

export const RootProvider = ({ children }) => {
  return <AuthUserProvider>{children}</AuthUserProvider>
}

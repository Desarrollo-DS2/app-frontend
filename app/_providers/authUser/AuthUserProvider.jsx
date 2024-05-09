'use client'

// This is a example of how to use the useAuthUser hook
import { createContext, useReducer, useContext } from 'react'

import { actionTypes } from './AuthUserActionsType'

const authUserContext = createContext()

const initialState = {}

const authUserReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export const AuthUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authUserReducer, initialState)

  return (
    <authUserContext.Provider value={{ state, dispatch }}>
      {children}
    </authUserContext.Provider>
  )
}

export const useAuthUser = () => {
  const context = useContext(authUserContext)
  if (context === undefined) {
    throw new Error('useAuthUser must be used within a AuthUserProvider')
  }
  return context
}

'use client'

import { createContext, useReducer, useContext } from 'react'

import { actionTypes } from './AuthUserActions'

const authUserContext = createContext()

const initialState = {
  credentials: null,
  loggedIn: false,
  tokenAccess: null,
  tokenRefresh: null,
  error: null,
  user: [],
}

const authUserReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        credentials: action.payload.user,
        loggedIn: true,
        tokenAccess: action.payload.access,
        tokenRefresh: action.payload.refresh,
        error: null,
      }
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        credentials: null,
        loggedIn: false,
        error: true,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        credentials: null,
        loggedIn: false,
        tokenAccess: null,
        tokenRefresh: null,
        error: null,
      }
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

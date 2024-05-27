'use client'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { createContext, useReducer, useContext, use } from 'react'
import { actionTypes } from './AuthUserActions'

const authUserContext = createContext()

export const initialState = {
  credentials: null,
  loggedIn: false,
  tokenAccess: null,
  tokenRefresh: null,
  error: null,
  user: [],
}

export const authUserReducer = (state, action) => {
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

  useEffect(() => {
    if (state.loggedIn && state.credentials) {
      const currentUser = JSON.parse(Cookies.get('currentUser'))
      if (currentUser) {
        dispatch({
          type: actionTypes.LOGIN,
          payload: {
            user: JSON.parse(sessionStorage.getItem('currentUser')),
            access: currentUser.access,
            refresh: currentUser.refresh,
          },
        })
      }
    }
  }, [])

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

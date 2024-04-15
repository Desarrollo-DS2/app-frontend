import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthUser } from './_providers/authUser/AuthUserProvider'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const { state, dispatch } = useAuthUser()

  useEffect(() => {
    const currentUser = state.tokenAccess
    console.log(currentUser)

    if (!currentUser && router.pathname !== '/login') {
      router.push('/login')
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

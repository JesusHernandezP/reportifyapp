import { toast } from 'sonner'
import httpService from '../services/httpService.js'
import useAuth from './useAuth.js'

function useServer() {
  const { token, setUser } = useAuth()

  const handleResponse = ({ data, loading, error }) => {

    if (data?.status && data?.data?.token) { //aqui comprobamos si data tiene status ok y un token dentro de data del data
      setUser({ token: data.data.token})
    }

    if (data?.data?.email) {
      setUser({ user: data.data })
    }

    if (error && error.message === "Wrong email or password") {
      toast.error('El usuario o contraseña es incorrecto')
    } else {
      if (error) {
        toast.error(error.message)
      }
    }

    return { data, loading, error }
  }

  return {
    get: ({ url }) => httpService({ method: 'GET', url, token }).then(handleResponse),
    post: ({ url, body, hasImage }) => httpService({ method: 'POST', url, token, body, hasImage }).then(handleResponse),
    put: ({ url, body }) => httpService({ method: 'PUT', url, token, body }).then(handleResponse),
    delete: ({ url }) => httpService({ method: 'DELETE', url, token })
  }
}

export default useServer
import axios from 'axios'

const AUTH_URL = 'https://accounts.spotify.com/authorize'
const AUTH_PARAMS = {
  client_id: '4b10d69fa7f74ab6926bbe83d61a4dd8',
  response_type: 'code',
  redirect_uri:
    'expaa9db9daf96147c3bcb981e6b2d26228://z3-gb7.louiebert.rn-fiddling.exp.direct/+/callback/'
}

class AuthStore {
  token = ''

  constructor() {
    axios
      .get(AUTH_URL, {
        headers: {
          client_id: '4b10d69fa7f74ab6926bbe83d61a4dd8',
          response_type: 'code',
          redirect_uri:
            'expaa9db9daf96147c3bcb981e6b2d26228://z3-gb7.louiebert.rn-fiddling.exp.direct/+/callback/'
        }
      })
      .then(
        (result: any) => console.log(result),
        (error: any) => console.log(error)
      )
  }
}

export default new AuthStore()

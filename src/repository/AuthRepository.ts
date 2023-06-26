export const authUser = (username, password: any) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username == 'david' && password == '12345') {
        return res({
          data: {
            name: 'david silva de jesus',
            username: 'david jesus',
            token: 'a545as-564asd564-a4s5d487',
            message: 'Login efetuado com sucesso.',
          }
        })
      }
      rej({
        data: {
          message: 'Login ou senha incorreto.'
        }
      })
    }, 3000)
  })
}

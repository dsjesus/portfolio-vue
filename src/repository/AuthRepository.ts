export const authUser = (username, password: any) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username == 'teste' && password == 'teste') {
        return res({
          data: {
            name: 'Teste',
            username: 'Teste',
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

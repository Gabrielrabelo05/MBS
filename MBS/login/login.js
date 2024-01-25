// const apiLog = "http://localhost:8080/perfil/login"
function realizarLogin() {

    const usuarioInput = document.getElementById('usuario-log').value;
    const senhaInput = document.getElementById('senha-log').value;

    
    const dadosUsuario = {
      usuario: usuarioInput,
      senha: senhaInput,
    };

    const urlAPI = 'http://localhost:8080/perfil/login';
    const configuracaoRequisicao = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosUsuario),
    };

    // Fazendo a requisição usando fetch()
    fetch(urlAPI, configuracaoRequisicao)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao autenticar usuário');
        }
        return response.json();
      })
      .then(dados => {
        // Manipula os dados recebidos da API (por exemplo, token de autenticação)
        console.log(dados);
        // Implemente lógica adicional conforme necessário
      })
      .catch(erro => {
        console.error('Erro ao fazer a requisição:', erro);
        // Implemente lógica para lidar com erros de autenticação
      });
  }
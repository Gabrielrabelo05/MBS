// async function fazerLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const requestBody = {
//         username: username,
//         password: password
//     };

//     try {
//         const response = await fetch('http://localhost:8080/perfil/login', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(requestBody)
//         });

//         if (response.ok) {
//             console.log('Login bem-sucedido!');
//             // Faça o redirecionamento ou outra ação necessária após o login
//         } else {
//             const errorMessage = await response.text();
//             alert('Erro ao fazer login: ' + errorMessage);
//         }
//     } catch (error) {
//         console.error('Erro na requisição:', error);
//     }
// }

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validacaoUser() {
    const usuario = document.getElementById('ipt-user').value;

    if (!validarTamanhoCampo(usuario, 1, 16)) {
        alert('O usuário deve ter entre 1 e 15 caracteres.');
        document.getElementById('ipt-user').value = "";
    }
}

function validarTamanhoCampo(campo, min, max) {
    const tamanho = campo.length;
    return tamanho >= min && tamanho <= max;
}

function validarFormulario() {
    const email = document.forms["form"]["email"].value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (!validarEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    if (!validarTamanhoCampo(senha, 1, 9)) {
        alert('A senha deve ter entre 1 e 8 caracteres.');
        return false;
    }
    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem.');
        return false;
    }
    return true; }

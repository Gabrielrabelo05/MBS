function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    complemento = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (complemento.length >=3) &&
        (usuario.search("@")==-1) &&
        (complemento.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (complemento.search(" ")==-1) &&
        (complemento.search(".")!=-1) &&
        (complemento.indexOf(".") >=1)&&
        (complemento.lastIndexOf(".") < complemento.length - 1)) {
    alert("E-mail valido");
    }else{
    alert("E-mail invalido");
    }}

function validacaoUser() {
    let valorInput =  document.getElementById('ipt-user').value

    if (valorInput.length >= 8) {
        alert('blz');
    } else {
        alert('Usuário prescisa ter 8 caracteres ou menos.');
    }
}
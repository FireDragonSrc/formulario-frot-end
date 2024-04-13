const memoria = [{
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    senha: 'senha',
    idade: 'idade',
    pais: 'pais',
    telefone: 'telefone'
}]
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    memoria[0].nome = document.querySelector('.nome').value;
    memoria[0].sobrenome = document.querySelector('.sobrenome').value;
    memoria[0].email = document.querySelector('.email').value;
    memoria[0].senha = document.querySelector('.senha').value;
    memoria[0].idade = document.querySelector('.idade').value;
    memoria[0].pais = document.querySelector('.pais').value;
    memoria[0].telefone = document.querySelector('.numero').value;
})
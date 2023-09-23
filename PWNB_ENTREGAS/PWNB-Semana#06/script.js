const Registrodeusuario = [];

function RegistrarUser() {
    const nome = document.getElementById('registro-nome').value;
    const cpf = document.getElementById('registro-cpf').value;
    const email = document.getElementById('registro-email').value;
    const senha = document.getElementById('registro-senha').value;

    if (!nome || !cpf || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (Registrodeusuario.some(user => user.nome === nome)) {
        alert('Este nome de usuário já está registrado.');
        return;
    }

    if (cpf.length !== 11 || isNaN(cpf)) {
        alert('CPF inválido.');
        return;
    }

    if (!email.includes('@')) {
        alert('E-mail inválido.');
        return;
    }

    const NovoUsuario = {
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
    };

    if(NovoUsuario){
        console.log('Usuario criado!');
        console.log(`${nome}`);
        console.log(`${cpf}`);
        console.log(`${senha}`);
    }

    Registrodeusuario.push(NovoUsuario);

    alert(`(Veja o console)Registro concluído para ${nome}!`);
}

function Logado() {
    const nome = document.getElementById('login-nome').value;
    const senha = document.getElementById('login-senha').value;

    if (!nome || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const user = Registrodeusuario.find(u => u.nome === nome && u.senha === senha);

    if (user) {
        console.log('Login bem-sucedido:');
        console.log(`Nome de Usuário: ${nome}`);
        alert(`(Veja o console)Bem-vindo, ${nome}!`);
    } else {
        alert('Usuário não registrado ou senha incorreta.');
    }
}
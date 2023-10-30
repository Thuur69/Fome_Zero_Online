// Função para verificar a validação de todos os campos
function validarCampos() {
  let validNome = validarNomeCampo();
  let validDataNascimento = validarDataNascimentoCampo();
  let validEmail = validarEmailCampo();
  let validCpf = validarCpfCampo();
  let validGenero = validarGeneroCampo();
  let validCep = validarCepCampo();
  let validTelefone = validarTelefoneCampo();
  let validSenha = validarSenhaCampo();
  let validConfirmSenha = validarConfirmSenhaCampo();
  
  return validNome && validDataNascimento && validEmail && validCpf && validGenero && validTelefone && validCep && validSenha && validConfirmSenha;
}

// Função para validar o campo Nome
function validarNomeCampo() {
  const nome = document.querySelector('#nome');
  const labelNome = document.querySelector('label[for="nome"]');
  const nomeValue = nome.value.trim();
  
  if (nomeValue.length < 3) {
    labelNome.style.color = 'red';
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
    nome.style.borderColor = 'red';
    return false;
  } else {
    labelNome.style.color = 'green';
    labelNome.innerHTML = 'Nome';
    nome.style.borderColor = 'green';
    return true;
  }
}

// Função para validar o campo Data de Nascimento
function validarDataNascimentoCampo() {
  const dataNascimento = document.querySelector('#dataNascimento');
  const labelDataNascimento = document.querySelector('label[for="dataNascimento"]');
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  
  if (!datePattern.test(dataNascimento.value)) {
    labelDataNascimento.style.color = 'red';
    labelDataNascimento.innerHTML = 'Data de Nascimento *Insira uma data válida';
    return false;
  } else {
    labelDataNascimento.style.color = 'green';
    labelDataNascimento.innerHTML = 'Data de Nascimento';
    return true;
  }
}

// Função para validar o campo Email
function validarEmailCampo() {
  const email = document.querySelector('#email');
  const labelEmail = document.querySelector('label[for="email"]');
  const emailValue = email.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if (!emailPattern.test(emailValue)) {
    labelEmail.style.color = 'red';
    labelEmail.innerHTML = 'Email *Insira um email válido';
    email.style.borderColor = 'red';
    return false;
  } else {
    labelEmail.style.color = 'green';
    labelEmail.innerHTML = 'Email';
    email.style.borderColor = 'green';
    return true;
  }
}

// Função para validar o campo CPF
function validarCpfCampo() {
  const cpf = document.querySelector('#cpf');
  const labelCpf = document.querySelector('label[for="cpf"]');
  const cpfValue = cpf.value.replace(/\D/g, '');
  
  if (cpfValue.length !== 11) {
    labelCpf.style.color = 'red';
    labelCpf.innerHTML = 'CPF *Insira exatamente 11 números';
    cpf.style.borderColor = 'red';
    return false;
  } else {
    const formattedCpf = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    labelCpf.style.color = 'green';
    labelCpf.innerHTML = 'CPF';
    cpf.value = formattedCpf;
    cpf.style.borderColor = 'green';
    return true;
  }
}

// Função para validar o campo Genero
function validarGeneroCampo() {
  const genero = document.querySelector('#gender');
  const labelGenero = document.querySelector('label[for="gender"]');
  const generoValue = genero.value;

  if (generoValue === "") {
    labelGenero.style.color = 'red';
    labelGenero.innerHTML = 'Gênero *Selecione um gênero';
    genero.style.borderColor = 'red';
    return false;
  } else {
    labelGenero.style.color = 'green';
    labelGenero.innerHTML = 'Gênero';
    genero.style.borderColor = 'green';
    return true;
  }
}


// Função para validar o campo CEP
function validarCepCampo() {
  const cep = document.querySelector('#cep');
  const labelCep = document.querySelector('label[for="cep"]');
  const cepValue = cep.value.replace(/\D/g, '');
  
  if (cepValue.length !== 8) {
    labelCep.style.color = 'red';
    labelCep.innerHTML = 'CEP *Insira exatamente 8 números';
    cep.style.borderColor = 'red';
    return false;
  } else {
    labelCep.style.color = 'green';
    labelCep.innerHTML = 'CEP';
    cep.style.borderColor = 'green';
    buscarDetalhesCEP(cepValue);
    return true;
  }
}

// Função para buscar detalhes do CEP
function buscarDetalhesCEP(cepValue) {
  // Implemente a busca de detalhes do CEP aqui e preencha os campos de cidade, estado e rua

  // Exemplo de chamada à API ViaCEP
  const viaCepURL = `https://viacep.com.br/ws/${cepValue}/json/`;
  
  fetch(viaCepURL)
    .then((response) => response.json())
    .then((data) => {
      const cidade = document.querySelector('#cidade');
      const estado = document.querySelector('#estado');
      const rua = document.querySelector('#rua');
      
      cidade.value = data.localidade;
      estado.value = data.uf;
      rua.value = data.logradouro;
      
      const labelCidade = document.querySelector('label[for="cidade"]');
      const labelEstado = document.querySelector('label[for="estado"]');
      const labelRua = document.querySelector('label[for="rua"]');
      

      labelCidade.style.color = 'green';
      labelEstado.style.color = 'green';
      labelRua.style.color = 'green';
      
      labelCidade.innerHTML = 'Cidade';
      labelEstado.innerHTML = 'Estado';
      labelRua.innerHTML = 'Rua';
      
      cep.style.borderColor = 'green';
      cidade.style.borderColor = 'green';
      estado.style.borderColor = 'green';
      rua.style.borderColor = 'green';
    })
    .catch((error) => {
      console.log('Erro ao buscar dados do CEP:', error);
    });
}

        function formatarTelefone(input) {
        let telefone = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (telefone.length === 11) {
          telefone = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`;
          // Formata com (DD) DDDDD-DDDD
        }
        input.value = telefone; // Atualiza o valor do campo
      }

      function validarTelefoneCampo() {
        const telefone = document.querySelector('#telefone');
        const labelTelefone = document.querySelector('label[for="telefone"]');
        const telefoneValue = telefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        const telefonePattern = /^[0-9]{10,11}$/; // Padrão de telefone com 10 ou 11 dígitos
        
        if (!telefonePattern.test(telefoneValue)) {
          labelTelefone.style.color = 'red';
          labelTelefone.innerHTML = 'Telefone *Insira um telefone válido';
          telefone.style.borderColor = 'red';
          return false;
        } else {
          labelTelefone.style.color = 'green';
          labelTelefone.innerHTML = 'Telefone';
          telefone.style.borderColor = 'green';
          return true;
        }
      }

// Função para validar o campo Senha
function validarSenhaCampo() {
  const senha = document.querySelector('#senha');
  const labelSenha = document.querySelector('label[for="senha"]');
  const senhaValue = senha.value;
  
  if (senhaValue.length < 6) {
    labelSenha.style.color = 'red';
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres';
    senha.style.borderColor = 'red';
    return false;
  } else {
    labelSenha.style.color = 'green';
    labelSenha.innerHTML = 'Senha';
    senha.style.borderColor = 'green';
    return true;
  }
}

// Função para validar o campo Confirmar Senha
function validarConfirmSenhaCampo() {
  const senha = document.querySelector('#senha');
  const confirmSenha = document.querySelector('#confirmSenha');
  const labelConfirmSenha = document.querySelector('label[for="confirmSenha"]');
  
  if (senha.value !== confirmSenha.value) {
    labelConfirmSenha.style.color = 'red';
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
    confirmSenha.style.borderColor = 'red';
    return false;
  } else {
    labelConfirmSenha.style.color = 'green';
    labelConfirmSenha.innerHTML = 'Confirmar Senha';
    confirmSenha.style.borderColor = 'green';
    return true;
  }
}
// Seleciona o ícone (botão) para alternar a visibilidade

let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha');
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});
let btnConfirmSenha = document.querySelector('#verConfirmSenha'); 
btnConfirmSenha.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha');
  
  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text');
  } else {
    inputConfirmSenha.setAttribute('type', 'password');
  }
});

// Função para processar o cadastro
function cadastrar() {
  if (validarCampos()) {
    // Substitua este trecho para salvar os dados do usuário conforme necessário
    console.log('Dados do usuário serão enviados.');

    // Exemplo de envio dos dados para localStorage
    const listaEmail = JSON.parse(localStorage.getItem('listaEmail') || '[]');
    
    listaEmail.push({
      nomeCad: nome.value,
      cpfCad: cpf.value,
      generoCad: genero.value,
      cepCad: cep.value,
      cidadeCad: cidade.value,
      estadoCad: estado.value,
      ruaCad: rua.value,
      telefoneCad: telefone.value,
      emailCad: email.value,
      senhaCad: senha.value,
    });
    
    localStorage.setItem('listaEmail', JSON.stringify(listaEmail));
    
    msgSuccess.style.display = 'block';
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
    msgError.style.display = 'none';
    msgError.innerHTML = '';

    // Redirecionamento (substitua o URL pelo necessário)
    console.log('Redirecionando para a página de login...');
    
    setTimeout(() => {
      console.log('Redirecionamento concluído');
      window.location.href = '../html/signin.html';
    }, 3000);
  } else {
    msgError.style.display = 'block';
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSuccess.style.display = 'none';
    msgSuccess.innerHTML = '';
  }
}

// ... Código para lidar com a visibilidade das senhas

// Configurar os event listeners para validação
document.querySelector('#nome').addEventListener('keyup', validarNomeCampo);
document.querySelector('#dataNascimento').addEventListener('change', validarDataNascimentoCampo);
document.querySelector('#email').addEventListener('keyup', validarEmailCampo);
document.querySelector('#cpf').addEventListener('keyup', validarCpfCampo);
document.querySelector('#genero').addEventListener('change', validarGeneroCampo);
document.querySelector('#cep').addEventListener('blur', () => {
  if (validarCepCampo()) {
    buscarDetalhesCEP(cep.value.replace(/\D/g, ''));
  }
});
document.querySelector('#telefone').addEventListener('keyup', validarTelefoneCampo);
document.querySelector('#senha').addEventListener('keyup', validarSenhaCampo);
document.querySelector('#confirmSenha').addEventListener('keyup', validarConfirmSenhaCampo);

// Event listener para o botão de cadastro
document.querySelector('#btnCadastrar').addEventListener('click', cadastrar);
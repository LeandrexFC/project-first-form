const btn = document.getElementById('btn');
const btn2 = document.getElementById('submit-btn');
const box = document.getElementById('agreement');

const teste = () => {
  const login = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

btn.addEventListener('click', teste);

const teste2 = () => {
  if (box.checked === true) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
};

box.addEventListener('click', teste2);
teste2();

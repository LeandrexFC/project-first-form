const btn = document.getElementById("btn");

const teste = () => {
  let login = document.getElementById("email").value;
  let password = document.getElementById("senha").value;

  if (login === "tryber@teste.com" && password === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
};

btn.addEventListener("click", teste);

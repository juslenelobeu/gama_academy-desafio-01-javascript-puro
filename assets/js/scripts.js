const register = document.getElementById("register");

register.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const formValues = {
    name,
    email,
  };
  const convertValues = JSON.stringify(formValues);
  localStorage.setItem("lead", convertValues);

  const content = document.getElementById("content");
  content.innerHTML = `
  <section class="loading">
    <div class="loader"></div>
  </section>
  `;

  setTimeout(() => {
    content.innerHTML = `
    <section class="thanks">
      <h1>Cadastro realizado com sucesso!</h1>
      <h2>
        <img src="./assets/images/icon-check.svg" alt="">
        Obrigado <strong>${name}</strong> por se cadastrar!
      </h2>
      <h3>Fique ligado em seu e-mail pois enviaremos ofertas arrasadoras!</h3>
    </section>
    <footer class="footer">
      <span>Todos os dados contidos são fictícios e fazem parte da elaboração do desafio proposto no programa
        <strong>Hiring
          Coders</strong> oferecido para pela <strong>Gama Academy</strong>.</span>
      <span>By <a href="https://juslenelobeudesigner.com.br" target="_blank">Juslene Lobeu</a></span>
    </footer>
    `;
  }, 2800);
});

import React, { useState } from "react";
import styles from "./Cadastro.module.css";

function Cadastro() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function register(e) {
    e.preventDefault();
    e.stopPropagation();

    let users = localStorage.getItem("users");

    if (!users) {
      users = [];
    } else {
      users = JSON.parse(users);
    }

    users.push({
      name: name,
      cpf: cpf,
      email: email,
      password: password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    setName("");
    setCpf("");
    setEmail("");
    setPassword("");

    alert("Cadastro realizado com sucesso!");

    window.location.href = "/login";
  }

  return (
    <main className={styles.mainCadastro}>
      <div className={styles.cad1}>
        <img src="../../../public/logo-porto-azul.svg" alt="Logo Azul da Porto Seguro" />
        <p>
          Phygital <br />
          <span>Porto</span>
        </p>
      </div>
      <div className={styles.cad2}>
        <a href="/">
          <i className="fa-regular fa-circle-xmark"></i>
        </a>
        <div className={styles.cadastro}>
          <h2>Cadastre-se</h2>
          <p>Preencha os dados:</p>
          <form onSubmit={register}>
            <div className={styles.iconinput}>
              <label htmlFor="Nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="Digite seu nome..."
                autoComplete="off"
                required
              ></input>
            </div>
            <div className={styles.iconinput}>
              <label htmlFor="CPF">CPF:</label>
              <input
                type="number"
                id="cpf"
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.currentTarget.value)}
                placeholder="Digite seu CPF..."
                autoComplete="off"
                required
              ></input>
            </div>
            <div className={styles.iconinput}>
              <label htmlFor="Email">E-mail:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="Digite seu E-mail..."
                autoComplete="off"
                required
              ></input>
            </div>
            <div className={styles.iconinput}>
              <label htmlFor="Senha">Crie uma senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Digite sua senha..."
                autoComplete="off"
                required
              ></input>
            </div>

            <button>Criar conta</button>
          </form>
        </div>
        <p>© Copyright 2024 by Phygital Porto. Todos os direitos reservados.</p>
      </div>
    </main>
  );
}

export default Cadastro;

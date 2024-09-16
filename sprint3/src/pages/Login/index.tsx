import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(e) {
        e.preventDefault();
        e.stopPropagation();

        let users = localStorage.getItem("users");

        if (!users) {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        const user = users.find((us) => us.email == email);

        console.log("user => ", user, users);

        if (user.password !== password) {
            alert("Senha incorreta!");
        } else {
            localStorage.setItem("loggedUser", email);

            setEmail("");
            setPassword("");

            window.location.href = "/";
        }
    }

    return (
        <main className={styles.mainLogin}>
            <div className={styles.log1}>
                <img src="../../../public/logo-porto-azul.svg" alt="Logo Azul Porto Seguro" />
                <p>
                    Phygital <br />
                    <span>Porto</span>
                </p>
            </div>
            <div className={styles.log2}>
                <a href="/"><i className="fa-regular fa-circle-xmark"></i></a>
                <div className={styles.login}>
                    <h2>Login</h2>
                    <p>Por favor, faça login na sua conta!</p>
                    <form onSubmit={login}>
                        <div className={styles.iconinput}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                placeholder="E-mail"
                                autoComplete="off"
                            ></input>
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className={styles.iconinput}>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                placeholder="Senha"
                                autoComplete="off"
                            ></input>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <button>Entrar</button>
                    </form>
                    <a href="/cadastro">Não possui conta? Crie uma agora!</a>
                </div>
                <p>© Copyright 2024 by Phygital Porto. Todos os direitos reservados.</p>
            </div>
        </main>
    );
}

export default Login;

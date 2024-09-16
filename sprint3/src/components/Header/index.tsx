import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);

  function logout() {
    localStorage.removeItem("loggedUser");

    getUser();
  }

  function getUser() {
    const email = localStorage.getItem("loggedUser");
    let users = localStorage.getItem("users");

    if (!users) {
      users = [];
    } else {
      users = JSON.parse(users);
    }

    const user = users.find((us) => us.email == email);

    setUser(user);
  }

  function clickLogin() {
    if (user) {
      setOpen(!open);
    } else {
      window.location.href = "/login";
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header className={styles.header}>
      <span>
        <img
          src="../../../public/logo-porto-branco.svg"
          alt="Logo Porto Seguro"
        />
        <h1>PHYGITAL PORTO</h1>
      </span>
      <button>
        <div onClick={() => clickLogin()}>
          <i className="fa-duotone fa-solid fa-circle-user"></i>
          <p>Login</p>
        </div>

        {user && open ? (
          <div className={styles.usuario}>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>

            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : null}
      </button>
    </header>
  );
}

export default Header;

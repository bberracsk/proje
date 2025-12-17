import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "../Layout/Layout";

import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("login");


  function login(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "bera" && password === "2103") {
      navigate("/home");
    } else {
      alert("Kullanıcı adı veya şifre yanlış");
    }
  }

  return (
    <Layout>


      <div className="login-page">

        {/* ÜST SABİT YAZI */}
        <h1 className="login-title">✨ROSSWOMAN DÜNYASINA KATIL✨</h1>

        <div className="login-box">

          {/* SABİT FORM SEÇİCİ */}
          <div className="form-switch">
            <span
              className={activeForm === "login" ? "active" : ""}
              onClick={() => setActiveForm("login")}
            >
              Giriş Yap
            </span>
            <span
              className={activeForm === "register" ? "active" : ""}
              onClick={() => setActiveForm("register")}
            >
              Kayıt Ol
            </span>
          </div>

          {/* DEĞİŞEN FORM ALANI */}
          {activeForm === "login" && (
            <form className="login-form" onSubmit={login}>
              <input id="username" type="text" placeholder="Kullanıcı adı" />
              <input id="password" type="password" placeholder="Şifre" />
              <button>Giriş Yap</button>
            </form>
          )}

          {activeForm === "register" && (
            <form className="login-form">
              {/* Ad ve Soyad yan yana olması için bir kapsayıcı ekledik */}
              <div className="name-row">
                <input type="text" placeholder="Ad" />
                <input type="text" placeholder="Soyad" />
              </div>
              <input type="email" placeholder="E-posta" />
              <input type="tel" placeholder="Telefon Numarası" />
              <input type="password" placeholder="Şifre" />
              <button>Kayıt Ol</button>
            </form>
          )}

        </div>
      </div>
    </Layout>
  );
}

export default Login;

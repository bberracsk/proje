import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "bera" && password === "2103") {
      navigate("/haircare");
    } else {
      alert("Kullanıcı adı veya şifre yanlış");
    }
  }

  return (
    <Layout>
      <div className="login-page">
        <h1 className="login-title">✨ TEKRAR HOŞ GELDİN ✨</h1>
        <div className="login-box">
          <form className="login-form" onSubmit={handleLogin}>
            <h2 style={{ color: "#b4036d", textAlign: "center", marginBottom: "10px" }}>Giriş Yap</h2>
            <input name="username" type="text" placeholder="Kullanıcı adı" required />
            <input name="password" type="password" placeholder="Şifre" required />
            <button type="submit">Giriş Yap</button>
            <p className="form-footer-text">
              Henüz hesabın yok mu? <b onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "#b4036d" }}>Üye Ol</b>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
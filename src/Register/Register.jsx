import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import "../Login/Login.css"; // Ortak CSS'i Login klasöründen çekiyoruz

function Register() {
    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
        navigate("/login");
    }

    return (
        <Layout>
            <div className="login-page">
                <h1 className="login-title">✨ AİLEMİZE KATIL ✨</h1>
                <div className="login-box">
                    <form className="login-form" onSubmit={handleRegister}>
                        <h2 style={{ color: "#b4036d", textAlign: "center", marginBottom: "10px" }}>Yeni Üyelik</h2>
                        <div className="name-row">
                            <input type="text" placeholder="Ad" required />
                            <input type="text" placeholder="Soyad" required />
                        </div>
                        <input type="email" placeholder="E-posta" required />
                        <input type="tel" placeholder="Telefon" required />
                        <input type="password" placeholder="Şifre" required />
                        <button type="submit">Kayıt Ol</button>
                        <p className="form-footer-text">
                            Zaten üye misin? <b onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "#b4036d" }}>Giriş Yap</b>
                        </p>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Register;
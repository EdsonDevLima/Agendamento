import Style from "./home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfPassword] = useState("");
  const newUser = { name, email, password, ConfirmPassword };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={Style.cadForm}>
      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>
        <label>
          Nome completo:
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          Confirmação de senha
          <input
            type="password"
            onChange={(e) => {
              setConfPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" />
        <p>
          ja sou cadastrado<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default Home;

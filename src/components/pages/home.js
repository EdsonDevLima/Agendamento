import Style from "./home.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfPassword] = useState("");
  const newUser = { name, email, password, ConfirmPassword };
  const navigate = useNavigate();
  const CreateNewUser = async () => {
    const response = await fetch("http://localhost:4000", {
      method: "POST",
      headers: { "content-type": "aplication/json" },
      body: JSON.stringify(newUser),
    });
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser);
    const data = await CreateNewUser();
    if (data.ok) {
      localStorage.setItem("@token", data);
    }
    navigate("/login");
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

import "./style.css";
import Delete from "../../assets/delete.svg";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [users, setUser] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const userFromApi = await api.get("/user");

    setUser(userFromApi.data);
  }

  async function createUsers() {
    await api.post("/user", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    try {
      const resp = await api.delete(`/user/${id}`);
      console.log(resp.data.message);
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 404) {
          alert("Usuário não encontrado.");
        } else if (error.response.status === 409) {
          alert("Não foi possível deletar: existem registros dependentes.");
        } else {
          alert("Erro ao deletar usuário. Tente novamente.");
        }
      } else {
        alert("Erro de conexão com o servidor.");
      }
    }
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="name" ref={inputName} />
        <input placeholder="Idade" type="number" name="age" ref={inputAge} />
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          ref={inputEmail}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span> {user.name} </span>{" "}
            </p>
            <p>
              Idade: <span> {user.age} </span>{" "}
            </p>
            <p>
              Email: <span>{user.email} </span>{" "}
            </p>
          </div>
          <button>
            <img src={Delete} onClick={() => deleteUsers(user.id)} />
          </button>
        </div>
      ))}
    </div>
  );
}

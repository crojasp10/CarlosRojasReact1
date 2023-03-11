import { useState } from 'react'
import './App.css'
import Card from "./components/Card";

function App() {
  const [userName, setUserName] = useState("");
  const [comida, setComida] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangeUserName = (event) => {
    validUserName(event.target.value)
    setUserName(event.target.value);
  };
  const onChangeComida = (event) => {
    validComida(event.target.value)
    setComida(event.target.value);
  };
  

  const validUserName = (userName) => {
    const withoutSpace = userName.trim();

    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setErrorSelect("Nombre debe tener al menos 3 caracteres");
      return false;
    }
  };

  const validComida = (comida) => {
    const withoutSpace = comida.trim();
    if (withoutSpace.length >= 6) {
      return true;
    } else {
      setErrorSelect("Comida favorita debe tener al menos 6 caracteres");
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validUserName(userName);

    const isComidaValid = validComida( comida);


    if (isNameValid && isComidaValid) {
      setSend(true);
      setErrorSelect("");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="text"
          placeholder="Ingresa tu comida favorita"
          value={comida}
          onChange={onChangeComida}
        />

        <button type="submit">
         enviar
        </button>
      </form>
      <div className="error">{errorSelect}</div>

      {send && (
        <Card
          userName={userName}
          comida={comida}
        />
      )}
    </div>
  );
}

export default App;


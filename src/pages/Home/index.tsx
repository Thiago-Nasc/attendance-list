// Importaçôes
import './style.css';
import { Card } from '../../components/Card';
import { DeleteList } from '../../components/DeleteList';
import React, { useState, useEffect, KeyboardEvent } from 'react';

// Componente principal
export function Home() {

  // Types
  type ObjPerson = {nome: string, time: string}[]

  // States
  const [personPresent, setPersonPresent] = useState('');
  const [personList, setPersonList] = useState<ObjPerson>([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  // Função responsável pela validação e inserção de elementos na lista de presença
  function handleAddPerson() {
    if ( personPresent === '') {
      alert('Digite um nome antes de adicionar a lista!');
    } else {
      const newPerson = {
        nome: personPresent,
        time: new Date().toLocaleTimeString('pt-br', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      };

      setPersonList(prevState => [...prevState, newPerson]);
      // Limpando input após a inserção de um elemento
      setPersonPresent('');
    }
  };

  // Realizando requisação a API do github
  useEffect(() => {
    fetch('https://api.github.com/users/Thiago-Nasc')
    .then( response => response.json())
    .then( data => setUser({name: data.name, avatar: data.avatar_url}))
  }, [])

  // Retorno do componente principal
  return (
    <div className="Home">

      {/* Área de cabeçalho */}
      <header>
        <h1>Lista de Presença</h1>
        <div className="user">
          <span>{user.name}</span>
          <img src={user.avatar} alt="imagem de perfil do usuário" />
        </div>
      </header>

      {/* Área de requisção de dados do cliente */}
      <div className="areaInput">

        <input
        type="text"
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPersonPresent(e.target.value)}
        onKeyUp={ (e: KeyboardEvent) => e.which == 13 ? handleAddPerson() : null}
        id="inputName"
        value={personPresent}
        />

        <button onClick={handleAddPerson}>adicionar</button>

      </div>
      
      {/* Imprimindo elementos cadastrados */}
      <div id="cards">

        {personList.map( (person, i) => <Card name={person.nome} time={person.time} key={i} f_delete={() => {
          const valorPerson = personList[i];
          setPersonList((prevState) => {
            return prevState.filter((person) => person !== valorPerson);
          });
        }}/>)}

        {/* Imprimindo componente DeleteList */}
        {personList.length != 0 && <DeleteList deleteList={ () => setPersonList([])} />}

      </div>
    </div>
  )
}
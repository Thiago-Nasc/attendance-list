import './style.css';
import { Card } from '../../components/Card';
import { DeleteList } from '../../components/DeleteList';
import React, { useState, useEffect } from 'react';

export function Home() {

  type NewPerson = any[];

  const [personPresent, setPersonPresent] = useState('');
  const [personList, setPersonList] = useState<NewPerson>([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddPerson() {
    const newPerson = {
      nome: personPresent,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setPersonList( prevState => [...prevState, newPerson]);
    const inputName: HTMLInputElement | null = document.querySelector('#inputName');
    inputName!.value = '';
  };


  useEffect(() => {
    fetch('https://api.github.com/users/Thiago-Nasc')
    .then( response => response.json())
    .then( data => setUser({name: data.name, avatar: data.avatar_url}))
  }, [])

  return (
    <div className="Home">
      <header>
        <h1>Lista de Presença</h1>
        <div className="user">
          <span>{user.name}</span>
          <img src={user.avatar} alt="imagem de perfil do usuário" />
        </div>
      </header>
      <div className="areaInput">
        <input type="text" autoComplete="off" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPersonPresent(e.target.value)} id="inputName"/>
        <button onClick={handleAddPerson}>adicionar</button>
      </div>
      <div id="cards">

        {personList.map( (person, i) => <Card name={person.nome} time={person.time} id={i} key={i} f_delete={() => {
          const valorPerson = personList[i];
          setPersonList((prevState) => {
            return prevState.filter((person) => person !== valorPerson);
          });
        }}/>)}

        {<DeleteList deleteList={ () => setPersonList([])} />}

      </div>
    </div>
  )
}


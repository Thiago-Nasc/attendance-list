import './style.css';
import { Card } from '../../components/Card';
import React, { useState } from 'react';

export function Home() {

  type NewPerson = any[];

  const [personPresent, setPersonPresent] = useState('');
  const [personList, setPersonList] = useState<NewPerson>([]);

  function handleAddStudent() {
    let newPerson = {
      nome: personPresent,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setPersonList( prevState => [...prevState, newPerson]);
  };

  return (
    <div className="Home">

      <div className="areaInput">
        <h1>Lista de Presença</h1>
        <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPersonPresent(e.target.value)}/>
        <button onClick={handleAddStudent}>adicionar</button>
      </div>
      <div id="cards">
        { personList?.map( (person, i) => <Card name={person.nome} time={person.time} key={i}/>)}
      </div>
    </div>
  )
}


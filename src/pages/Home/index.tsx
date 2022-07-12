import './style.css';
import { Card } from '../../components/Card';

export function Home() {

  return (
    <div className="Home">

      <div className="areaInput">
        <h1>Lista de despesas</h1>
        <input type="text"/>
        <button>adicionar</button>
      </div>
      <div className="cards">
      </div>
    </div>
  )
}


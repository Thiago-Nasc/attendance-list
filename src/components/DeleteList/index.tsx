// Componente responsável por excluir todas os items cadastradas na lista de presença

import './style.css';

export function DeleteList(props: {deleteList: VoidFunction}) {

    return (
        <div className="container">
            <button onClick={props.deleteList}>LimparList</button>
        </div>
    )
};
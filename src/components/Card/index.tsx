// Componente resposável pela exibição dos elementos cadastrados na lista de presença

import './style.css';

export function Card(props: {name: string, time: string, f_delete: any }) {

    return (
        <div className='card'>
            <span className='nome'>{props.name}</span>
            <div className="right-side">
                <span className='hora'>{props.time}</span>
                <i className="fa-solid fa-trash-can delete" onClick={props.f_delete}></i>
            </div>
        </div>
    )
};
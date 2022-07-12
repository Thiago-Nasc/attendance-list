import './style.css';

import './style.css';

export function Card(props: {name: string, time: string}) {
    return (
        <div className='card'>
            <span className='nome'>{props.name}</span>
            <span className='hora'>{props.time}</span>
        </div>
    )
};
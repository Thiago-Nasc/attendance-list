import './style.css';

export function Card(props: {name: string, time: string}) {

    function handleDeletePerson() {
        
    };

    return (
        <div className='card'>
            <span className='nome'>{props.name}</span>
            <div className="right-side">
                <span className='hora'>{props.time}</span>
                <i className="fa-solid fa-trash-can delete"></i>
            </div>
        </div>
    )
};
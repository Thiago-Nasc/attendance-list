import './style.css';

export function Card(props: {name: string, time: string, id: number}) {

    function handleDeletePerson() {
        const card = document.getElementById(props.id.toString());
        card!.remove();
    };

    return (
        <div className='card' id={props.id.toString()}>
            <span className='nome'>{props.name}</span>
            <div className="right-side">
                <span className='hora'>{props.time}</span>
                <i className="fa-solid fa-trash-can delete" onClick={handleDeletePerson}></i>
            </div>
        </div>
    )
};
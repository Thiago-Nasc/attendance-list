import './style.css';

export function DeleteList(props: {deleteList: any}) {

    return (
        <div className="container">
            <button onClick={props.deleteList}>LimparList</button>
        </div>
    )
};
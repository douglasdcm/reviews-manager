export function Button(props){
    return (
        <div>
            <button className="button" onClick={props.onClick}>{props.name}</button>
        </div>
    )
}
export function TextArea(props){
    return (
        <div>
            <textarea value={props.value} onChange={props.onChange} />
        </div>
    )
}
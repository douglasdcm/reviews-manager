import { TextArea } from "./TextArea"
import { Button } from "./Button";

function handleAddComment(){
    console.log('handleAddComment');
}

export function ReviewSession(props){
    return (
        <div className="flexbox-container">
            <TextArea onChange={handleAddComment}/>
            <Button name='Send' onClick={props.onClickSend}/>
        </div>
    )
}